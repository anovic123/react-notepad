import React from 'react';

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea: React.FC<TextareaProps> = ({ value, onChange, ...props }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = '40px';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return <textarea ref={textareaRef} value={value} onChange={onChange} {...props} />;
};
