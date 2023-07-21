

import SectionTitleWrapper from "./SectionTitle.style";

const SectionTitle = ({ title, subtitle, isCenter, ...props }) => {
  return (
    <SectionTitleWrapper {...props}>
      {subtitle && (
        <h2>

          {subtitle}{" "}

        </h2>
      )}
      {title && <h3>{title}</h3>}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
