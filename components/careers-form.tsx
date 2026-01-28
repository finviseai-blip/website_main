'use client';

import React from "react"

import { useState } from 'react';
import { X, Upload, Check } from 'lucide-react';

interface CareersFormProps {
  onClose: () => void;
}

export default function CareersForm({ onClose }: CareersFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    type: 'internship',
    message: '',
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    'App Development Internship',
    'AI Development Internship',
    'DevOps Internship',
    'Senior Full-Stack Engineer',
    'AI/ML Engineer',
    'DevOps Engineer',
    'Product Manager',
    'Solutions Architect',
    'Data Scientist',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        type: 'internship',
        message: '',
        resume: null,
      });
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div className="animate-fade-in rounded-lg bg-background p-8 text-center max-w-md border border-border">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Check size={32} className="text-accent" />
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Application Submitted!</h2>
          <p className="text-foreground/70">
            Thank you for your application. We'll review it and get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-4">
      <div className="animate-fade-in w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-background p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">Apply to Finvise AI</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          Role
          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-foreground mb-2">
              Role Applying For *
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Select a role...</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Internship or Job */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Type of Position *
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="internship"
                  checked={formData.type === 'internship'}
                  onChange={handleInputChange}
                  className="h-4 w-4 cursor-pointer accent-accent"
                />
                <span className="text-foreground">Internship</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="job"
                  checked={formData.type === 'job'}
                  onChange={handleInputChange}
                  className="h-4 w-4 cursor-pointer accent-accent"
                />
                <span className="text-foreground">Full-Time Job</span>
              </label>
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-semibold text-foreground mb-2">
              Resume / CV *
            </label>
            <label
              htmlFor="resume"
              className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary p-6 transition-colors hover:border-accent hover:bg-secondary/50"
            >
              <div className="text-center">
                <Upload size={24} className="mx-auto mb-2 text-accent" />
                <span className="text-sm text-foreground">
                  {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                </span>
                <span className="block text-xs text-foreground/60 mt-1">PDF, DOC, or DOCX</span>
              </div>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="hidden"
              />
            </label>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
              Tell Us About Yourself
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Share your experience, skills, and why you're interested in joining Finvise AI..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 rounded-lg bg-accent px-6 py-3 font-semibold text-black transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
