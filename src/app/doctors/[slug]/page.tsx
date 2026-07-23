import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DoctorDetail from '@/components/sections/DoctorDetail';
import CtaBand from '@/components/sections/CtaBand';
import { findDoctorBySlug, allDoctorSlugs } from '@/lib/data';

export const revalidate = 60;

export function generateStaticParams() {
  return allDoctorSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = findDoctorBySlug(params.slug);
  if (!d) return { title: 'Doctor not found — Dentheal' };
  return {
    title: `${d.name} — ${d.role} · Dentheal`,
    description: d.description || `${d.name}, ${d.role} at Dentheal.`
  };
}

export default function DoctorPage({ params }: { params: { slug: string } }) {
  const d = findDoctorBySlug(params.slug);
  if (!d) notFound();
  return (
    <>
      <DoctorDetail doctor={d} />
      <CtaBand
        heading={`Book your visit with ${d.name}`}
        body="Same-week appointments available. It only takes a minute."
        ctaLabel="Book Appointment"
      />
    </>
  );
}
