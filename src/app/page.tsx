"use client";

import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";

export default function Home() {
  const [submitted, setSubmitted] = React.useState<Record<string, any> | null>(
    null,
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="w-full p-4 shadow-lg bg-default-50 dark:bg-black border border-default-200 dark:border-default-800">
          <Card.Header className="flex flex-row items-start justify-between px-6 pt-6 pb-0">
            <div className="flex flex-col">
              <Card.Title className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Next.js with HeroUI
              </Card.Title>
              <Card.Description className="text-default-800 dark:text-default-400 font-medium">
                Create your profile to get started
              </Card.Description>
            </div>
            <ThemeSwitcher />
          </Card.Header>
          <Card.Content className="px-6 py-4">
            <Form
              className="flex flex-col gap-4"
              validationBehavior="native"
              onSubmit={onSubmit}
            >
              <TextField isRequired name="name" className="flex flex-col gap-1">
                <Label className="text-default-800 dark:text-default-300">
                  Name
                </Label>
                <Input
                  placeholder="Enter your name"
                  className="bg-default-100/50 dark:bg-default-100/20 border border-default-200 dark:border-default-700 rounded-lg px-3 py-2 text-default-800 dark:text-default-100 placeholder:text-default-400 group-data-[focus=true]:border-primary"
                />
              </TextField>

              <TextField
                isRequired
                name="email"
                className="flex flex-col gap-1"
              >
                <Label className="text-default-800 dark:text-default-300">
                  Email
                </Label>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-default-100/50 dark:bg-default-100/20 border border-default-200 dark:border-default-700 rounded-lg px-3 py-2 text-default-800 dark:text-default-100 placeholder:text-default-400 group-data-[focus=true]:border-primary"
                />
              </TextField>

              <TextField name="role" className="flex flex-col gap-1">
                <Label className="text-default-800 dark:text-default-300">
                  Role
                </Label>
                <Input
                  placeholder="Enter your role (optional)"
                  className="bg-default-100/50 dark:bg-default-100/20 border border-default-200 dark:border-default-700 rounded-lg px-3 py-2 text-default-800 dark:text-default-100 placeholder:text-default-400 group-data-[focus=true]:border-primary"
                />
              </TextField>

              <div className="flex gap-2 justify-end mt-4">
                <Button type="reset" variant="danger-soft">
                  Reset
                </Button>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-default-100 border border-default-200"
                >
                  <p className="text-sm font-semibold text-default-700 mb-2">
                    You submitted:
                  </p>
                  <pre className="text-xs text-default-600 whitespace-pre-wrap break-all font-mono">
                    {JSON.stringify(submitted, null, 2)}
                  </pre>
                </motion.div>
              )}
            </Form>
          </Card.Content>
        </Card>
      </motion.div>
    </div>
  );
}
