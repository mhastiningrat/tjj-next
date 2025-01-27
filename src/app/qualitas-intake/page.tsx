import { QualitasIntakeForm } from "@/components/qualitas-intake-form";
import React from "react";
import Sidebar from "../halaman-utama/page";

const QualitasIntake = () => {
  return (
    <Sidebar page="Qualitas Intake">
      <QualitasIntakeForm />
    </Sidebar>
  );
};

export default QualitasIntake;
