import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h2>Do not wonder in the woods...</h2>
      <img src="static/undraw_cat_epte.svg" alt="My Happy SVG" />
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
