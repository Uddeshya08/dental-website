import type { RegisteredComponent } from '@builder.io/sdk-react';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import PopularServices from './components/sections/PopularServices';
import AboutNumbered from './components/sections/AboutNumbered';
import Journey from './components/sections/Journey';
import BeforeAfter from './components/sections/BeforeAfter';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Hours from './components/sections/Hours';
import BlogTeaser from './components/sections/BlogTeaser';
import CtaBand from './components/sections/CtaBand';
import ServicesGrid from './components/sections/ServicesGrid';
import AboutStory from './components/sections/AboutStory';
import BlogList from './components/sections/BlogList';
import BookingFlow from './components/sections/BookingFlow';

export const customComponents: RegisteredComponent[] = [
  {
    component: Hero,
    name: 'Hero',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Accepting new patients' },
      { name: 'title', type: 'longText', defaultValue: 'Dentistry that feels ' },
      { name: 'emphasis', type: 'string', defaultValue: 'calm' },
      { name: 'body', type: 'longText' },
      { name: 'ctaPrimary', type: 'string', defaultValue: 'Book your visit' },
      { name: 'ctaSecondary', type: 'string', defaultValue: 'Explore services' },
      { name: 'image', type: 'file', allowedFileTypes: ['jpeg','jpg','png','webp'] },
      { name: 'videoSrc', type: 'string', helperText: 'MP4 URL. Empty = show image instead.' },
      { name: 'posterSrc', type: 'file', allowedFileTypes: ['jpeg','jpg','png','webp'], helperText: 'Poster shown before video loads' },
      { name: 'stats', type: 'list', subFields: [
        { name: 'value', type: 'string' }, { name: 'label', type: 'string' }
      ] }
    ]
  },
  {
    component: TrustBar,
    name: 'TrustBar',
    inputs: [{
      name: 'items', type: 'list', subFields: [
        { name: 'mark', type: 'string' }, { name: 'label', type: 'string' }
      ]
    }]
  },
  {
    component: PopularServices,
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
  },
  {
    component: AboutNumbered,
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
  },
  {
    component: Journey,
    name: 'Journey',
    inputs: [
      { name: 'heading', type: 'longText' },
      { name: 'body', type: 'longText' },
      { name: 'steps', type: 'list', subFields: [
        { name: 'n', type: 'string' }, { name: 'title', type: 'string' }, { name: 'body', type: 'longText' }
      ] }
    ]
  },
  {
    component: BeforeAfter,
    name: 'BeforeAfter',
    inputs: [
      { name: 'eyebrow', type: 'string' },
      { name: 'heading', type: 'string' },
      { name: 'body', type: 'longText' },
      { name: 'image', type: 'file' },
      { name: 'ctaLabel', type: 'string' }
    ]
  },
  {
    component: Team,
    name: 'Team',
    inputs: [
      { name: 'heading', type: 'string' },
      { name: 'emphasis', type: 'string' },
      { name: 'tabs', type: 'list', subFields: [{ name: 'label', type: 'string' }] }
    ]
  },
  {
    component: Testimonials,
    name: 'Testimonials',
    inputs: [
      { name: 'heading', type: 'string' },
      { name: 'items', type: 'list', subFields: [
        { name: 'quote', type: 'longText' }, { name: 'name', type: 'string' },
        { name: 'meta', type: 'string' }, { name: 'avatar', type: 'file' }
      ] }
    ]
  },
  {
    component: Hours,
    name: 'Hours',
    inputs: [
      { name: 'eyebrow', type: 'string' },
      { name: 'marqueeText', type: 'string' },
      { name: 'cutoutImage', type: 'file' },
      { name: 'items', type: 'list', subFields: [
        { name: 'days', type: 'string' }, { name: 'time', type: 'string' }
      ] }
    ]
  },
  {
    component: BlogTeaser,
    name: 'BlogTeaser',
    inputs: [
      { name: 'heading', type: 'string' },
      { name: 'items', type: 'list', subFields: [
        { name: 'img', type: 'file' }, { name: 'tag', type: 'string' }, { name: 'title', type: 'string' }
      ] }
    ]
  },
  {
    component: CtaBand,
    name: 'CtaBand',
    inputs: [
      { name: 'heading', type: 'longText' },
      { name: 'body', type: 'longText' },
      { name: 'ctaLabel', type: 'string' }
    ]
  },
  {
    component: ServicesGrid,
    name: 'ServicesGrid',
    inputs: [
      { name: 'eyebrow', type: 'string' },
      { name: 'heading', type: 'string' },
      { name: 'body', type: 'longText' }
    ]
  },
  {
    component: AboutStory,
    name: 'AboutStory',
    inputs: [
      { name: 'eyebrow', type: 'string' },
      { name: 'heading', type: 'longText' },
      { name: 'body', type: 'longText' },
      { name: 'founderImage', type: 'file' }
    ]
  },
  {
    component: BlogList,
    name: 'BlogList',
    inputs: [
      { name: 'eyebrow', type: 'string' },
      { name: 'heading', type: 'string' },
      { name: 'body', type: 'longText' }
    ]
  },
  { component: BookingFlow, name: 'BookingFlow', inputs: [] }
];
