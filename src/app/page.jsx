import Extrabar from "@/components/layout/Extrabar";
import { Button } from "@/components/ui/button";

export default function Home() {
  

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 min-h-screen">
      <div className="lg:col-span-3">
        testing
      </div>
      <div>

        <Extrabar />
      </div>
    </div>
  );
}
