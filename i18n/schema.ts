import { z } from "zod";

export const messagesSchema = z.object({
  siteName: z.string(),
  siteDescription: z.string(),
  songData: z.object({
    title: z.string(),
    titlePlaceholder: z.string(),
    artist: z.string(),
    artistPlaceholder: z.string(),
    unit: z.string(),
  }),
  unitData: z.object({
    title: z.string(),
    titlePlaceholder: z.string(),
    content: z.string(),
    contentPlaceholder: z.string(),
    unitType: z.string(),
  }),
  unitTypes: z.object({
    intro: z.string(),
    ending: z.string(),
    verse: z.string(),
    prechorus: z.string(),
    chorus: z.string(),
    bridge: z.string(),
    interlude: z.string(),
    solo: z.string(),
    neutral: z.string(),
  }),
});

export type Messages = z.infer<typeof messagesSchema>;
