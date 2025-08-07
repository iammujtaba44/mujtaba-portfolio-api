/**
 * String Regex Utilities
 * Common regex patterns for string manipulation
 */

export class StringRegexUtils {
  /**
   * Replace multiple spaces with single space
   */
  static readonly MULTIPLE_SPACES = /\s+/g;

  /**
   * Replace spaces with hyphens (kebab-case)
   */
  static readonly SPACES_TO_HYPHENS = /\s+/g;

  /**
   * Replace spaces with underscores (snake_case)
   */
  static readonly SPACES_TO_UNDERSCORES = /\s+/g;

  /**
   * Remove all spaces
   */
  static readonly REMOVE_SPACES = /\s/g;

  /**
   * Convert to kebab-case (lowercase with hyphens)
   */
  static toKebabCase(str: string): string {
    return str.toLowerCase().replace(this.SPACES_TO_HYPHENS, '-');
  }

  /**
   * Convert to snake_case (lowercase with underscores)
   */
  static toSnakeCase(str: string): string {
    return str.toLowerCase().replace(this.SPACES_TO_UNDERSCORES, '_');
  }

  /**
   * Convert to camelCase
   */
  static toCamelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }

  /**
   * Convert to PascalCase
   */
  static toPascalCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/^[a-z]/, (chr) => chr.toUpperCase());
  }

  /**
   * Remove special characters except alphanumeric and spaces
   */
  static removeSpecialChars(str: string): string {
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
  }

  /**
   * Remove special characters except alphanumeric, spaces, and hyphens
   */
  static removeSpecialCharsKeepHyphens(str: string): string {
    return str.replace(/[^a-zA-Z0-9\s-]/g, '');
  }

  /**
   * Normalize whitespace (replace multiple spaces with single space)
   */
  static normalizeWhitespace(str: string): string {
    return str.replace(this.MULTIPLE_SPACES, ' ').trim();
  }

  /**
   * Generate URL-friendly slug
   */
  static generateSlug(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(this.SPACES_TO_HYPHENS, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  }

  /**
   * Validate email format
   */
  static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Validate URL format
   */
  static readonly URL_REGEX = /^https?:\/\/.+/;

  /**
   * Validate phone number (basic)
   */
  static readonly PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

  /**
   * Check if string is valid email
   */
  static isValidEmail(email: string): boolean {
    return this.EMAIL_REGEX.test(email);
  }

  /**
   * Check if string is valid URL
   */
  static isValidUrl(url: string): boolean {
    return this.URL_REGEX.test(url);
  }

  /**
   * Check if string is valid phone number
   */
  static isValidPhone(phone: string): boolean {
    return this.PHONE_REGEX.test(phone);
  }
}
