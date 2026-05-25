import { describe, it, expect } from 'vitest';
import { cn, formatPrice, scrollToSection } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn', () => {
    it('merges class names', () => {
      const result = cn('class1', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('handles conditional classes', () => {
      const result = cn('base', true && 'conditional');
      expect(result).toBe('base conditional');
    });

    it('handles falsy values', () => {
      const result = cn('base', false && 'hidden', undefined && 'undefined');
      expect(result).toBe('base');
    });
  });

  describe('formatPrice', () => {
    it('formats price in Indonesian Rupiah', () => {
      const result = formatPrice(500000);
      expect(result).toContain('500');
      expect(result).toContain('Rp');
    });

    it('formats large numbers', () => {
      const result = formatPrice(1500000);
      expect(result).toContain('1.500');
    });
  });

  describe('scrollToSection', () => {
    it('does not throw when element exists', () => {
      // Create a mock element
      const mockElement = { scrollIntoView: vi.fn() };
      vi.stubGlobal('document', {
        getElementById: () => mockElement
      });

      expect(() => scrollToSection('test')).not.toThrow();
    });
  });
});