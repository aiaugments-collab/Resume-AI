'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Shield,
  Key,
  Save,
  Camera,
  Edit
} from 'lucide-react';

export function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Profile</h1>
        <p className="text-muted-foreground">
          Manage your admin account settings and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="relative mx-auto">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-lg">AU</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                variant="outline"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Admin User</h3>
              <p className="text-sm text-muted-foreground">admin@resumeai.com</p>
              <Badge variant="default" className="bg-green-100 text-green-800">
                <Shield className="h-3 w-3 mr-1" />
                Super Admin
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Joined Jan 2024</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-sm">
                <Key className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Last login: 2 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Settings */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Profile Settings</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Personal Information
              </h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue="Admin"
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue="User"
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="admin@resumeai.com"
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    defaultValue="+1 (555) 123-4567"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Bio */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Bio
              </h4>
              <div className="space-y-2">
                <Label htmlFor="bio">About</Label>
                <Textarea
                  id="bio"
                  rows={3}
                  defaultValue="Platform administrator with expertise in AI-powered resume generation systems. Responsible for maintaining platform performance and user experience."
                  disabled={!isEditing}
                />
              </div>
            </div>

            <Separator />

            {/* Admin Permissions */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Admin Permissions
              </h4>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">User Management</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">Full Access</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Billing Management</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">Full Access</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">System Settings</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">Full Access</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Analytics</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">Full Access</Badge>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Activity Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <div className="font-medium">Updated user permissions</div>
                <div className="text-sm text-muted-foreground">Modified access for john.doe@example.com</div>
              </div>
              <div className="text-sm text-muted-foreground">2 hours ago</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <div className="font-medium">System maintenance completed</div>
                <div className="text-sm text-muted-foreground">Database optimization and backup</div>
              </div>
              <div className="text-sm text-muted-foreground">1 day ago</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <div className="font-medium">New subscription plan created</div>
                <div className="text-sm text-muted-foreground">Enterprise Plus plan with advanced features</div>
              </div>
              <div className="text-sm text-muted-foreground">3 days ago</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
