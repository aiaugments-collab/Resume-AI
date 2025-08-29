'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Eye, 
  Download, 
  Star, 
  Filter,
  Grid3X3,
  List,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
} from 'lucide-react';
import { motion } from 'motion/react';
import PageContainer from '@/components/layout/page-container';

export function TemplatesContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Templates', count: 24 },
    { id: 'professional', name: 'Professional', count: 8 },
    { id: 'creative', name: 'Creative', count: 6 },
    { id: 'modern', name: 'Modern', count: 5 },
    { id: 'minimal', name: 'Minimal', count: 5 }
  ];

  const templates = [
    {
      id: 1,
      name: 'Professional Executive',
      category: 'professional',
      description: 'Perfect for senior-level positions and executive roles',
      image: '/templates/professional-executive.png',
      rating: 4.9,
      downloads: 15420,
      tags: ['ATS-Friendly', 'Executive', 'Corporate'],
      isPro: false,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Creative Designer',
      category: 'creative',
      description: 'Showcase your creativity with this vibrant design',
      image: '/templates/creative-designer.png',
      rating: 4.8,
      downloads: 12350,
      tags: ['Creative', 'Portfolio', 'Design'],
      isPro: true,
      color: 'purple'
    },
    {
      id: 3,
      name: 'Tech Minimalist',
      category: 'minimal',
      description: 'Clean and simple design for tech professionals',
      image: '/templates/tech-minimalist.png',
      rating: 4.9,
      downloads: 18750,
      tags: ['Tech', 'Clean', 'ATS-Friendly'],
      isPro: false,
      color: 'green'
    },
    {
      id: 4,
      name: 'Modern Graduate',
      category: 'modern',
      description: 'Perfect for recent graduates and entry-level positions',
      image: '/templates/modern-graduate.png',
      rating: 4.7,
      downloads: 9840,
      tags: ['Graduate', 'Entry-Level', 'Modern'],
      isPro: false,
      color: 'orange'
    },
    {
      id: 5,
      name: 'Corporate Elite',
      category: 'professional',
      description: 'Sophisticated design for corporate environments',
      image: '/templates/corporate-elite.png',
      rating: 4.8,
      downloads: 11200,
      tags: ['Corporate', 'Professional', 'Elegant'],
      isPro: true,
      color: 'indigo'
    },
    {
      id: 6,
      name: 'Startup Founder',
      category: 'modern',
      description: 'Dynamic template for entrepreneurs and startup roles',
      image: '/templates/startup-founder.png',
      rating: 4.6,
      downloads: 7650,
      tags: ['Startup', 'Entrepreneur', 'Dynamic'],
      isPro: true,
      color: 'red'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Resume Templates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professionally designed, ATS-optimized resume templates
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'ghost'}
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Industries */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Industries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Code className="h-4 w-4 mr-2" />
                  Technology
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Business
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Palette className="h-4 w-4 mr-2" />
                  Creative
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </Button>
              </CardContent>
            </Card>

            {/* Pro Features */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-blue-600/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Star className="h-5 w-5 mr-2 text-primary" />
                  Pro Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Unlock premium templates with advanced designs and layouts
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-blue-600">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Templates Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredTemplates.length} templates
              </p>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-[3/4] bg-muted">
                        {/* Template Preview Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className={`w-16 h-16 rounded-lg bg-${template.color}-500 mx-auto flex items-center justify-center`}>
                              <span className="text-white font-bold text-xl">
                                {template.name.charAt(0)}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">Preview</p>
                          </div>
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                          <Button size="sm" variant="secondary">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Use Template
                          </Button>
                        </div>

                        {/* Pro Badge */}
                        {template.isPro && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Pro
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {template.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {template.description}
                            </p>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{template.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Download className="h-3 w-3" />
                              <span>{template.downloads.toLocaleString()}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {template.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {template.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{template.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-6">
                          <div className="w-24 h-32 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className={`w-12 h-12 rounded-lg bg-${template.color}-500 flex items-center justify-center`}>
                              <span className="text-white font-bold">
                                {template.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-xl">{template.name}</h3>
                                <p className="text-muted-foreground">{template.description}</p>
                              </div>
                              {template.isPro && (
                                <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white">
                                  <Star className="h-3 w-3 mr-1" />
                                  Pro
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{template.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Download className="h-4 w-4" />
                                <span>{template.downloads.toLocaleString()} downloads</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {template.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-col space-y-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Use Template
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">No templates found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
