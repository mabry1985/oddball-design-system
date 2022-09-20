
import { css } from 'lit';
export default css`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply component specific CSS */
a,
::slotted(a){
  transition-property:var(--inline-link-transition-property-default);
  transition-property:var(
    --inline-link-transition-property,
    var(--inline-link-transition-property-default)
  );

  transition-timing-function:var(--inline-link-transition-timing-function-default);

  transition-timing-function:var(
    --inline-link-transition-timing-function,
    var(--inline-link-transition-timing-function-default)
  );

  transition-duration:var(--inline-link-transition-duration-default);

  transition-duration:var(
    --inline-link-transition-duration,
    var(--inline-link-transition-duration-default)
  );

  transition-delay:var(--inline-link-transition-delay-default);

  transition-delay:var(
    --inline-link-transition-delay,
    var(--inline-link-transition-delay-default)
  );

  font-family:var(--inline-link-ff-default);

  font-family:var(--inline-link-ff, var(--inline-link-ff-default));

  color:var(--inline-link-color-default);

  color:var(--inline-link-color, var(--inline-link-color-default));
  color:#ff0000;

  text-decoration:var(--inline-link-decoration-default);

  text-decoration:var(
    --inline-link-decoration,
    var(--inline-link-decoration-default)
  );
}

a:hover,
::slotted(a:hover){
  color:var(--inline-link-color-hover-default);
  color:var(--inline-link-color-hover, var(--inline-link-color-hover-default));

  text-decoration:var(--inline-link-default-hover-decoration);

  text-decoration:var(
    --inline-link-hover-decoration,
    var(--inline-link-default-hover-decoration)
  );
}

a:focus,
::slotted(a:focus){
  color:var(--inline-link-color-focus-default);
  color:var(--inline-link-color-focus, var(--inline-link-color-focus-default));

  text-decoration:var(--inline-link-focus-decoration-default);

  text-decoration:var(
    --inline-link-focus-decoration,
    var(--inline-link-focus-decoration-default)
  );
}
`;