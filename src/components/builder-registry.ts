'use client';
import { Builder } from '@builder.io/react';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import PopularServices from './sections/PopularServices';
import AboutNumbered from './sections/AboutNumbered';
import Journey from './sections/Journey';
import BeforeAfter from './sections/BeforeAfter';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Hours from './sections/Hours';
import BlogTeaser from './sections/BlogTeaser';
import CtaBand from './sections/CtaBand';
import ServicesGrid from './sections/ServicesGrid';
import AboutStory from './sections/AboutStory';
import BlogList from './sections/BlogList';
import BookingFlow from './sections/BookingFlow';

// Register every section as an editable Builder block.
// Each `inputs` entry becomes an editor control in Builder.io's visual editor.

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'eyebrow', type: 'string', defaultValue: 'Accepting new patients' },
    { name: 'title', type: 'longText', defaultValue: 'Dentistry that feels ' },
    { name: 'emphasis', type: 'string', defaultValue: 'calm' },
    { name: 'body', type: 'longText' },
    { name: 'ctaPrimary', type: 'string', defaultValue: 'Book your visit' },
    { name: 'ctaSecondary', type: 'string', defaultValue: 'Explore services' },
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg','jpg','png','webp'] },
    { name: 'stats', type: 'list', subFields: [
      { name: 'value', type: 'string' }, { name: 'label', type: 'string' }
    ] }
  ]
});

Builder.registerComponent(TrustBar, {
  name: 'TrustBar',
  inputs: [{
    name: 'items', type: 'list', subFields: [
      { name: 'mark', type: 'string' }, { name: 'label', type: 'string' }
    ]
  }]
});

Builder.registerComponent(PopularServices, {
  name: 'PopularServices',
  inputs: [
    { name: 'heading', type: 'string' },
    { name: 'emphasis', type: 'string' },
    { name: 'items', type: 'list', subFields: [
      { name: 'name', type: 'string' },
      { name: 'image', type: 'file' },
      { name: 'price', type: 'string' },
      { name: 'category', type: 'string' },
      { name: 'slug', type: 'string' }
    ] }
  ]
});

Builder.registerComponent(AboutNumbered, {
  name: 'AboutNumbered',
  inputs: [
    { name: 'eyebrow', type: 'string' },
    { name: 'heading', type: 'longText' },
    { name: 'body', type: 'longText' },
    { name: 'cols', type: 'list', subFields: [
      { name: 'n', type: 'string' }, { name: 'title', type: 'string' },
      { name: 'body', type: 'longText' }, { name: 'icon', type: 'string' }
    ] }
  ]
});

Builder.registerComponent(Journey, {
  name: 'Journey',
  inputs: [
    { name: 'heading', type: 'longText' },
    { name: 'body', type: 'longText' },
    { name: 'steps', type: 'list', subFields: [
      { name: 'n', type: 'string' }, { name: 'title', type: 'string' }, { name: 'body', type: 'longText' }
    ] }
  ]
});

Builder.registerComponent(BeforeAfter, {
  name: 'BeforeAfter',
  inputs: [
    { name: 'eyebrow', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'longText' },
    { name: 'image', type: 'file' },
    { name: 'ctaLabel', type: 'string' }
  ]
});

Builder.registerComponent(Team, {
  name: 'Team',
  inputs: [
    { name: 'heading', type: 'string' },
    { name: 'emphasis', type: 'string' },
    { name: 'tabs', type: 'list', subFields: [{ name: 'label', type: 'string' }] }
  ]
});

Builder.registerComponent(Testimonials, {
  name: 'Testimonials',
  inputs: [
    { name: 'heading', type: 'string' },
    { name: 'items', type: 'list', subFields: [
      { name: 'quote', type: 'longText' }, { name: 'name', type: 'string' },
      { name: 'meta', type: 'string' }, { name: 'avatar', type: 'file' }
    ] }
  ]
});

Builder.registerComponent(Hours, {
  name: 'Hours',
  inputs: [
    { name: 'eyebrow', type: 'string' },
    { name: 'marqueeText', type: 'string' },
    { name: 'cutoutImage', type: 'file' },
    { name: 'items', type: 'list', subFields: [
      { name: 'days', type: 'string' }, { name: 'time', type: 'string' }
    ] }
  ]
});

Builder.registerComponent(BlogTeaser, {
  name: 'BlogTeaser',
  inputs: [
    { name: 'heading', type: 'string' },
    { name: 'items', type: 'list', subFields: [
      { name: 'img', type: 'file' }, { name: 'tag', type: 'string' }, { name: 'title', type: 'string' }
    ] }
  ]
});

Builder.registerComponent(CtaBand, {
  name: 'CtaBand',
  inputs: [
    { name: 'heading', type: 'longText' },
    { name: 'body', type: 'longText' },
    { name: 'ctaLabel', type: 'string' }
  ]
});

Builder.registerComponent(ServicesGrid, {
  name: 'ServicesGrid',
  inputs: [
    { name: 'eyebrow', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'longText' }
  ]
});

Builder.registerComponent(AboutStory, {
  name: 'AboutStory',
  inputs: [
    { name: 'eyebrow', type: 'string' },
    { name: 'heading', type: 'longText' },
    { name: 'body', type: 'longText' },
    { name: 'founderImage', type: 'file' }
  ]
});

Builder.registerComponent(BlogList, {
  name: 'BlogList',
  inputs: [
    { name: 'eyebrow', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'longText' }
  ]
});

Builder.registerComponent(BookingFlow, { name: 'BookingFlow', inputs: [] });
