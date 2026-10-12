
import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class Reveal implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  private observer?: IntersectionObserver;

  
ngAfterViewInit(): void {
  const host = this.element.nativeElement;

  console.log('[Reveal] Directive initialized:', host.id || host.className);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('[Reveal] Skipped: reduced motion is enabled');
    return;
  }

  if (typeof IntersectionObserver === 'undefined') {
    console.error('[Reveal] IntersectionObserver is unavailable');
    return;
  }

  this.renderer.addClass(host, 'reveal-pending');

  console.log('[Reveal] Pending class added:', host);

  this.observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        console.log('[Reveal] Intersection detected:', {
          target: entry.target,
          isIntersecting: entry.isIntersecting
        });

        if (entry.isIntersecting) {
          this.renderer.addClass(host, 'reveal-visible');
          this.renderer.removeClass(host, 'reveal-pending');

          console.log('[Reveal] Visible class added:', host);

          this.observer?.unobserve(host);
        }
      }
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  this.observer.observe(host);
}


  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
