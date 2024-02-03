import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-6 h-max h-full border">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">DevHelper</h1>
                <h4 className="text-sm text-gray-600">Anonymous Whispers, Resonant Wisdom</h4>
            </div>
            <div>
                <Link href={'/about'}>About</Link>
            </div>
        </footer>
    )

} 