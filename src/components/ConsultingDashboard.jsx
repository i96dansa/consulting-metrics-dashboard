feature/color-scheme-update
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, Users, Clock, TrendingUp, Briefcase } from 'lucide-react';

const ConsultingDashboard = () => {
  const revenueData = [
    { month: 'Jan', revenue: 450000 },
    { month: 'Feb', revenue: 520000 },
    { month: 'Mar', revenue: 480000 },
    { month: 'Apr', revenue: 600000 },
    { month: 'May', revenue: 580000 },
    { month: 'Jun', revenue: 650000 }
  ];

  const utilizationData = [
    { month: 'Jan', rate: 85 },
    { month: 'Feb', rate: 82 },
    { month: 'Mar', rate: 88 },
    { month: 'Apr', rate: 86 },
    { month: 'May', rate: 89 },
    { month: 'Jun', rate: 87 }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Consulting Management Dashboard</h1>
      
      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Revenue MTD</CardTitle>
            <DollarSign className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">$650,000</div>
            <p className="text-sm text-emerald-600 font-medium">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Utilization Rate</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">87%</div>
            <p className="text-sm text-emerald-600 font-medium">+2% from target</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">24</div>
            <p className="text-sm text-blue-600 font-medium">3 starting next month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Consultants</CardTitle>
            <Users className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">85</div>
            <p className="text-sm text-emerald-600 font-medium">+5 this quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-slate-700">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px'
                    }}
                  />
                  <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-slate-700">Utilization Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={utilizationData}>
                  <defs>
                    <linearGradient id="utilizationGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                    fill="url(#utilizationGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConsultingDashboard;

