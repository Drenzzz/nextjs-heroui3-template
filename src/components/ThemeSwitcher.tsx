"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      size="lg"
      isSelected={theme === "light"}
      onChange={(isSelected) => setTheme(isSelected ? "light" : "dark")}
      className="bg-transparent"
    >
      <Switch.Control className="bg-default-200 group-data-[selected=true]:bg-primary">
        <Switch.Thumb className="bg-white text-default-900">
          {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
        </Switch.Thumb>
      </Switch.Control>
    </Switch>
  );
}
