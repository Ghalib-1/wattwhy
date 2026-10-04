'use client';

export default function TranslationCard({
  translation,
}: {
  translation: string | null;
}) {
  if (!translation) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
      <p className="text-sm font-medium text-blue-900 mb-2">
        In plain terms
      </p>
      <p className="text-slate-800 leading-relaxed">{translation}</p>
    </div>
  );
}