
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { UserNav } from "@/components/UserNav";

const SiteHeader = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Lovable</span>
          </Link>
          <Link to="/web-applications" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Web Applications
          </Link>
          <Link to="/mobile-apps" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Mobile Apps
          </Link>
           <Link to="/iot-devices" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            IoT Devices
          </Link>
          <Link to="/microcontroller-kits" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Microcontroller Kits
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
