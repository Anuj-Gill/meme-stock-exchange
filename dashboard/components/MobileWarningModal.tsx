"use client";

import { Monitor, Smartphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileWarningModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export function MobileWarningModal({ isOpen, onDismiss }: MobileWarningModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative bg-zinc-900/95 border border-white/10 rounded-3xl p-8 max-w-sm w-full shadow-2xl shadow-orange-500/10 animate-in zoom-in-95 fade-in duration-300">
        {/* Close Button */}
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
        >
          <X className="h-4 w-4 text-gray-400 group-hover:text-white" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl scale-150" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/30">
              <Smartphone className="h-10 w-10 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-3">
            Desktop Experience Recommended
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The developer was a bit lazy and didn&apos;t make this website fully responsive. 
            For the best trading experience, please use a larger screen.
          </p>
        </div>

        {/* Device Comparison */}
        <div className="flex items-center justify-center gap-4 mb-6 py-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <Smartphone className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500">Mobile</span>
          </div>
          <div className="text-gray-600">→</div>
          <div className="flex flex-col items-center gap-2">
            <Monitor className="h-6 w-6 text-orange-500" />
            <span className="text-xs text-orange-500 font-medium">Desktop</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            onClick={onDismiss}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-colors"
          >
            I&apos;ll Try Anyway
          </Button>
          <p className="text-center text-gray-500 text-xs">
            Some features may not work as expected on smaller screens
          </p>
        </div>
      </div>
    </div>
  );
}
