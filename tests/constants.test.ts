import { describe, it, expect } from 'vitest';
import { SERVICES, TEMPLATES, PRICING_TIERS, TESTIMONIALS, WHY_CHOOSE_US, FAQ_ITEMS } from '@/constants';

describe('Constants', () => {
  describe('SERVICES', () => {
    it('should have 7 services', () => {
      expect(SERVICES).toHaveLength(7);
    });

    it('each service should have required fields', () => {
      SERVICES.forEach(service => {
        expect(service).toHaveProperty('icon');
        expect(service).toHaveProperty('title');
        expect(service).toHaveProperty('description');
        expect(service).toHaveProperty('benefits');
        expect(service.benefits).toHaveLength(4);
      });
    });

    it('should include Landing Page service', () => {
      const landingPage = SERVICES.find(s => s.title === 'Landing Page');
      expect(landingPage).toBeDefined();
    });

    it('should include Website Cafe service', () => {
      const cafe = SERVICES.find(s => s.title === 'Website Cafe');
      expect(cafe).toBeDefined();
    });
  });

  describe('TEMPLATES', () => {
    it('should have 5 templates', () => {
      expect(TEMPLATES).toHaveLength(5);
    });

    it('each template should have required fields', () => {
      TEMPLATES.forEach(template => {
        expect(template).toHaveProperty('id');
        expect(template).toHaveProperty('title');
        expect(template).toHaveProperty('description');
        expect(template).toHaveProperty('color');
        expect(template).toHaveProperty('gradient');
        expect(template).toHaveProperty('category');
      });
    });
  });

  describe('PRICING_TIERS', () => {
    it('should have 3 pricing tiers', () => {
      expect(PRICING_TIERS).toHaveLength(3);
    });

    it('Business tier should be highlighted', () => {
      const business = PRICING_TIERS.find(t => t.name === 'Business');
      expect(business?.highlighted).toBe(true);
    });

    it('each tier should have CTA button text', () => {
      PRICING_TIERS.forEach(tier => {
        expect(tier.cta).toBeTruthy();
        expect(tier.features.length).toBeGreaterThan(0);
      });
    });
  });

  describe('TESTIMONIALS', () => {
    it('should have 5 testimonials', () => {
      expect(TESTIMONIALS).toHaveLength(5);
    });

    it('each testimonial should have rating of 5', () => {
      TESTIMONIALS.forEach(t => {
        expect(t.rating).toBe(5);
      });
    });
  });

  describe('WHY_CHOOSE_US', () => {
    it('should have 6 reasons', () => {
      expect(WHY_CHOOSE_US).toHaveLength(6);
    });
  });

  describe('FAQ_ITEMS', () => {
    it('should have 6 FAQ items', () => {
      expect(FAQ_ITEMS).toHaveLength(6);
    });

    it('each FAQ should have question and answer', () => {
      FAQ_ITEMS.forEach(item => {
        expect(item.question).toBeTruthy();
        expect(item.answer).toBeTruthy();
      });
    });
  });
});