import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-6xl font-serif mb-8 text-center tracking-tighter">Welcome Back</h1>
        <p className="text-center text-muted-foreground italic mb-12">Access your botanical collection by entering your credentials.</p>
        <div className="max-w-md mx-auto p-12 bg-white border border-border">
           {/* Auth Form to be completed in Sprint tickets */}
           <p className="text-center text-sm opacity-50 uppercase tracking-widest">Login Form Pending</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
