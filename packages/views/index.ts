const components = import.meta.glob('./**/*.vue', {
  import: 'default',
  eager: true,
});
console.log('components', components);

export default components;
export {};
