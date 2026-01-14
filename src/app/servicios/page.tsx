import { Suspense } from "react";
import ServiciosContent from "@/components/services/ServiciosContent";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Cargando...</div>}>
        <ServiciosContent />
      </Suspense>
    </div>
  );
}
