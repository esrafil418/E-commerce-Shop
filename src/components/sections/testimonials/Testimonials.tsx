"use client";

import { EmptyState, ErrorMessage, Loading } from "@/components/common";
import { useComments } from "@/features/comments/hooks/use-comments";
import { MessageCircle } from "lucide-react";

export function Testimonials() {
  const { data, isLoading, isError } = useComments(6);

  if (isLoading) {
    return (
      <section className="py-12">
        <Loading message="Loading comments..." />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-12">
        <ErrorMessage message="Failed to load comments" />
      </section>
    );
  }

  const comments = data?.comments ?? [];

  if (!comments.length) {
    return (
      <section className="py-12">
        <EmptyState title="No comments yet" />
      </section>
    );
  }

  return (
    <section className="border-t py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Latest comments</h2>
          <p className="text-sm text-muted-foreground">
            Live DummyJSON comments used as storefront social proof.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="size-4" />
                <span className="text-sm font-medium text-foreground">
                  {comment.user.fullName}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
