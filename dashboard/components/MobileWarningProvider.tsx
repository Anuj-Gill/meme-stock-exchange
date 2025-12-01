"use client";

import { useMobileDetection } from "@/hooks/useMobileDetection";
import { MobileWarningModal } from "@/components/MobileWarningModal";

interface MobileWarningProviderProps {
  children: React.ReactNode;
}

export function MobileWarningProvider({ children }: MobileWarningProviderProps) {
  const { showMobileWarning, dismissModal } = useMobileDetection();

  return (
    <>
      {children}
      <MobileWarningModal isOpen={showMobileWarning} onDismiss={dismissModal} />
    </>
  );
}
