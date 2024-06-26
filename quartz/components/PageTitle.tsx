import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class="page-title-container">
      <a href={baseDir}>
        <img
          src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5354e49588e03c817d03a4_peep-33.svg"
          alt=""
        />
      </a>
      <h1 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h1>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
@keyframes hideshow {
  from {
    transform: translateY(-60px);
    transform: rotate(-180deg);
    opacity: 0;
    width:0%;
  }
  to {
    transform: translateY(0px);
    transform: rotate(0deg);
    opacity: 1;
    width:30%:
  }
} 
div.page-title-container img {
  animation: hideshow 1.2s ease-in-out;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:30%;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
