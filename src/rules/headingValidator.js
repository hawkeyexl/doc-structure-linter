export function validateHeading(section, template) {
  const errors = [];

  // Const
  if (template.heading.const && section.heading.content !== template.heading.const) {
    errors.push({
      head: section.heading.content,
      startIndex: section.startIndex,
      endIndex: section.endIndex,
      message: `Expected title "${template.heading.const}", but found "${section.heading.content}"`,
    });
  }
  
  // Pattern
  if (template.heading.pattern && !template.heading.pattern.test(section.heading.content)) {
    errors.push({
      head: section.heading.content,
      startIndex: section.startIndex,
      endIndex: section.endIndex,
      message: `Title "${section.heading.content}" doesn't match pattern "${template.heading.pattern}"`,
    });
  }

  return errors;
}
