import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#2b1810]">
      <Navbar />
      <main className="relative">
        <div 
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
          style={{
            backgroundImage: "url('/lovable-uploads/1102d642-2b31-47ab-93db-4bccfbbc9c63.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 space-y-8">
            <Button 
              variant="secondary" 
              className="bg-[#2a2a2a]/90 text-white hover:bg-[#2a2a2a] px-6 py-2 text-sm font-light"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Trailer
            </Button>
            
            <h1 className="text-7xl md:text-8xl font-normal text-white leading-tight tracking-normal">
              <span className="text-[#ffd700]">Cook</span> Like A<br />Chef
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Master the art of cooking. Learn techniques and recipes from expert chefs around the world!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button 
                size="lg" 
                className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-base font-light px-8 py-6 rounded"
              >
                GET STARTED: BASIC PACK
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white hover:bg-white/20 text-base font-light px-8 py-6 rounded border-white/30"
              >
                GET STARTED: PRO PACK
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;