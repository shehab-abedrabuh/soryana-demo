'use client';

import { Play, X } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

import type { Lang } from '@/data/business';

const basePath = '/soryana-demo';

export function ClinicVideo({ lang }: { lang: Lang }) {
  const ar = lang === 'ar';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="video-preview">
          <Play size={18} />
          {ar
            ? 'شاهد لمحة من جلسات التأهيل'
            : 'A glimpse of rehabilitation'}
          <span>00:15</span>
        </button>
      </DialogTrigger>

      <DialogContent className="video-dialog" showCloseButton={false}>
        <DialogTitle>
          {ar
            ? 'من جلسات التأهيل في سوريانا'
            : 'Rehabilitation at Soriana'}
        </DialogTitle>

        <DialogDescription>
          {ar
            ? 'مقطع صامت من جلسة تأهيل بإشراف الفريق، وليس إرشادات للتمرين الذاتي.'
            : 'A silent clip of a supervised rehabilitation session, not instructions for self-directed exercise.'}
        </DialogDescription>

        <DialogClose
          className="lightbox-close icon-button"
          aria-label={ar ? 'إغلاق' : 'Close'}
        >
          <X />
        </DialogClose>

        <video
          controls
          playsInline
          muted
          preload="none"
          poster={`${basePath}/videos/rehabilitation-poster.webp`}
          aria-label={
            ar
              ? 'تمارين حركة تحت إشراف الفريق'
              : 'Supervised movement exercises'
          }
        >
          <source
            src={`${basePath}/videos/rehabilitation-session.mp4`}
            type="video/mp4"
          />
        </video>
      </DialogContent>
    </Dialog>
  );
}