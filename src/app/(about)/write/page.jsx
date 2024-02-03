
'use client'
import { Editor } from "novel";
import { supabase } from "@/services/supabase";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";


export default function Write() {
    const [content, setContent] = useState([])
    const [posts, setPosts] = useState([])
    const defaultEditorContent = {
        type: "doc",
        content: [
            {
                type: "heading",
                attrs: { level: 1 },
                content: [{ type: "text", text: "Title...." }],
            },
        ],
    };
    const userChecking = async () => {
        const UUID = localStorage.getItem('UUID')
        try {
            const { data } = await supabase.from('users').select('*').eq('id', UUID)
            if (data.length === 0) {
                await supabase.from('users').insert({ id: UUID })
            }
        } catch (error) {
            console.log("internal server error")
        }
    }
    const getPosts = async () => {
        try {
            let datas = await supabase.from('posts').select('*').eq('user_id', localStorage.getItem('UUID'))
            setPosts(datas.data)
        } catch (error) {
            console.log("internal server error")
        }
    }
    useEffect(() => {
        userChecking()
        getPosts()
    }, [])
    const { toast } = useToast()
    const handlePublish = async () => {
        const publish = await supabase.from('posts').insert({ user_id: localStorage.getItem('UUID'), content })
        if (publish.status === 201) {

            toast({
                variant: "default",
                title: "Your Stories Success Published",
                description: `${new Date().toLocaleString()}`,
            })
            getPosts()
        }
    }
    return (
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 p-3  gap-2">
            <div className="col-span-full top-2 sticky bg-white z-50 ">
                <Button onClick={handlePublish} disabled={content.length === 0}>Publish</Button>
            </div>
            <div className="lg:col-span-2">
                <Editor onUpdate={(e) => setContent(e?.getJSON())} className="w-full border rounded-lg shadow-md min-h-screen" defaultValue={defaultEditorContent} disableLocalStorage={true} />
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Your Posts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {posts.length !== 0 && posts.map((e, i) => (
                            <div key={e.id}>
                                <p key={i}>{e?.content?.content.map((c) => (
                                    c.content.map((d) => (
                                        <Fragment key={d}>
                                            {d.text}
                                        </Fragment>
                                    ))
                                ))}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}