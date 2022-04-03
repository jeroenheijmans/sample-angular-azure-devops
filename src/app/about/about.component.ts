import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  faqItems = [
    {
      expanded: false,
      question: 'What is this about?',
      answer:
        'Just some random text. This does not quite answer a question. The other questions explain why.',
    },
    {
      expanded: false,
      question: 'How does it work?',
      answer:
        "Really, it doesn't. Typically authors of websites just think that these are frequently asked. But instead they are not.",
    },
    {
      expanded: false,
      question: 'Will there be other questions?',
      answer:
        'For sure at some point there will be more questions. The real question is: is there an answer to all these questions? Who knows!?',
    },
  ];

  constructor() {}

  toggle(item: { expanded: boolean }) {
    item.expanded = !item.expanded;
  }
}
