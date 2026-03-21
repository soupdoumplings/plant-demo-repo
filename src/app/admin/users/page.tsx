"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Calendar, Shield } from "lucide-react";

interface Profile {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/admin/users");
        const data = await response.json();
        if (data.users) {
          setUsers(data.users);
        }
      } catch {
        console.error("Fetch users error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Cataloging digital curators...</div>;

  return (
    <main className="p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-serif">Digital Curators</h1>
        <p className="text-muted-foreground">Community management and member overview.</p>
      </header>

      <Card className="rounded-none border-none shadow-none bg-card/50">
        <CardHeader className="border-b pb-4 px-6">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground">Registered Members</CardTitle>
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">{users.length} Total Curators</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-on-surface/5 text-[10px] uppercase tracking-widest text-muted-foreground bg-surface/30">
                  <th className="px-6 py-4 font-medium">Curator</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Registry Date</th>
                  <th className="px-6 py-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-on-surface/5">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-surface/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif">
                          {user.full_name?.charAt(0) || "G"}
                        </div>
                        <span className="font-serif text-lg">{user.full_name || "Guest Curator"}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(user.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-block border px-2 py-0.5 text-[8px] uppercase tracking-widest font-bold text-forest-green border-forest-green bg-forest-green/5">
                        Verified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
