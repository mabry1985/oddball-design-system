
import { css } from 'lit';
export default css`
/* Apply CSS Variables to the host element. */
:host {
--inline-link-transition-property-default:color, background-color, border-color, text-decoration-color, fill, stroke;
--inline-link-transition-timing-function-default:cubic-bezier(0.4, 0, 0.2, 1);
--inline-link-transition-duration-default:300ms;
--inline-link-transition-delay-default:150ms;
--inline-link-ff-default:var(--ff-body);
--inline-link-color-default:var(--color-red-600);
--inline-link-decoration-default:none;
--inline-link-color-hover-default:var(--color-gray-600);
--inline-link-decoration-hover-default:underline;
--inline-link-color-focus-default:var(--color-gray-600);
--inline-link-decoration-focus-default:underline;
`;