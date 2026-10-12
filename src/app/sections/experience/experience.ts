import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements AfterViewInit, OnDestroy {
  @ViewChild('experienceSection', { static: true })
  experienceSection!: ElementRef<HTMLElement>;

  @ViewChild('experienceViewport', { static: true })
  experienceViewport!: ElementRef<HTMLElement>;

  @ViewChild('experienceTrack', { static: true })
  experienceTrack!: ElementRef<HTMLElement>;

  private animationContext?: gsap.Context;

  readonly experiences = [
    {
      period: 'SEP 2025 — PRESENT',
      role: 'Software Engineer',
      company: 'D2K Technologies · A Group ICRA Company',
      location: 'New Delhi, India',
      client: 'Punjab National Bank (PNB)',
      project: 'Early Warning Signal (EWS)',
      description:
        'Primary developer for an Early Warning Signal and Intelligent Transaction Monitoring platform supporting post-sanction credit monitoring and automated borrower risk assessment.',
      achievements: [
        'Developed and enhanced full-stack features using .NET MVC, Web API, Angular, SQL Server, Entity Framework and LINQ.',
        'Independently managed 12 Linux/RHEL application servers and 10 Nginx servers, including deployments, service management, monitoring, log analysis and production troubleshooting.',
        'Managed the application lifecycle from requirements analysis and development through database changes, testing, deployment and production support.',
        'Supported 6 Disaster Recovery (DR) drills, validating application availability, server connectivity, DNS changes, services and recovery environments.',
        'Addressed VAPT findings, security audits and SOC requirements, including security headers, CSP, cookie security, logging, dependency upgrades and application hardening.',
        'Developed and maintained an automated data crawler integrating external APIs for financial, regulatory, ratings, news and corporate data, processing approximately 7 lakh records.'
      ],
      technologies: [
        '.NET MVC',
        'ASP.NET Core Web API',
        'Angular',
        'SQL Server',
        'Entity Framework',
        'Linux / RHEL',
        'Nginx',
        'Azure'
      ]
    },
    {
      period: 'AUG 2023 — APR 2025',
      role: 'Software Engineer',
      company: 'Neurealm · Formerly GAVS Technologies',
      location: 'Chennai, India',
      client: 'Premier',
      project: 'Human Resource and Payroll (HRP)',
      description:
        'Contributed to an enterprise Human Resource and Payroll application, working across Administrator Maintenance, Employee Self-Service (ESS) and Manager Self-Service (MSS) portals.',
      achievements: [
        'Resolved and delivered 80+ production and application tickets involving SQL stored procedures, REST APIs, backend business logic and Angular UI components.',
        'Developed and maintained 10+ RESTful APIs across application workflows.',
        'Worked with Angular, .NET Web API, microservices, Entity Framework, LINQ, MS SQL and Azure.',
        'Participated in Agile Scrum ceremonies, including sprint planning, daily stand-ups and retrospectives.',
        'Resolved client queries, discussed business requirements and presented code fixes through technical walkthroughs.'
      ],
      technologies: [
        'Angular',
        '.NET Web API',
        'Microservices',
        'Entity Framework',
        'LINQ',
        'SQL Server',
        'Azure'
      ]
    }
  ];

  ngAfterViewInit(): void {
    // Keep normal scrolling on mobile and when reduced motion is preferred.
    if (
      window.matchMedia('(max-width: 767px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const section = this.experienceSection.nativeElement;
    const viewport = this.experienceViewport.nativeElement;
    const track = this.experienceTrack.nativeElement;

    this.animationContext = gsap.context(() => {
      const getScrollDistance = (): number =>
        Math.max(0, track.scrollHeight - viewport.clientHeight);

      // Avoid creating a pinned animation if no scrolling is necessary.
      if (getScrollDistance() <= 0) {
        return;
      }

      gsap.set(track, { y: 0 });

      gsap.to(track, {
        y: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.max(1, getScrollDistance())}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }, section);

    // Recalculate scroll distances after the page layout is ready.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  ngOnDestroy(): void {
    // Clean up GSAP animations and ScrollTriggers when Angular
    // destroys this component.
    this.animationContext?.revert();
  }
}