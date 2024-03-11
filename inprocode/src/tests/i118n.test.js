import i18n from './i18n';

describe('i18n Configuration', () => {
  it('should initialize i18n correctly', () => {
    expect(i18n.language).toBe('es');
    expect(i18n.options.fallbackLng).toBe('es');
  });

  it('should contain translations for different languages', () => {
    expect(i18n.exists('en')).toBe(true); 
    expect(i18n.exists('es')).toBe(true);
    expect(i18n.exists('ca')).toBe(true);
  });

});
