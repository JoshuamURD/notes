import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="30"
            fill="none"
            viewBox="0 0 200 200"
          >
            <path
              fill="url(#paint0_linear_104_193)"
              fill-rule="even"
              d="m116.3 75.474 33.053-33.053a5.817 5.817 0 0 1 8.226 8.226L124.526 83.7c7.46-1.677 16.17-2.64 25.474-2.64 27.614 0 50 8.48 50 18.94s-22.386 18.939-50 18.939c-9.304 0-18.014-.962-25.474-2.639l33.053 33.053a5.818 5.818 0 0 1-8.226 8.226L116.3 124.526c1.677 7.46 2.639 16.171 2.639 25.474 0 27.614-8.479 50-18.939 50s-18.94-22.386-18.94-50c0-9.304.963-18.014 2.64-25.474l-33.053 33.053a5.817 5.817 0 0 1-8.226-8.226L75.474 116.3c-7.46 1.677-16.17 2.639-25.474 2.639-27.614 0-50-8.479-50-18.939s22.386-18.94 50-18.94c9.303 0 18.014.963 25.474 2.64L42.421 50.647a5.816 5.816 0 0 1 8.226-8.226L83.7 75.474c-1.677-7.46-2.64-16.17-2.64-25.474 0-27.614 8.48-50 18.94-50s18.939 22.386 18.939 50c0 9.303-.962 18.013-2.639 25.474Z"
              clip-rule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_104_193"
                x1="177"
                x2="39.5"
                y1="0"
                y2="152.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="black"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
            </defs>
          </svg>
        </a>

        <p>
          In the tapestry of curiosity's threads, human potential weaves, learning's embrace guiding
          towards boundless deeds.
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
