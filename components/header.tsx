import Link from 'next/link'

export default function Header() {
  return (
    <nav>
      <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
        <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/">Home</Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/about">About</Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/contact">Contact</Link>
        </div>
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link  className="w-28 dark:hidden" href="/">
            <svg viewBox="0 0 370 185.82">
              <g xmlns="http://www.w3.org/2000/svg" fill="#111">
                <path d="m38.357 153.164-.99-4.152a63.874 63.874 0 0 0-2.873 2.051c2.082 1.361 3.863 2.101 3.863 2.101zM36.832 146.77c-.682.55-1.235 1.086-1.235 1.086l1.235-1.087z" />
                <path d="M36.364 162.992c1.24.237 2.729.503 4.049.707.199.031.394.058.598.09.033.002.067.008.1.01 1.802.25 5.721.461 13.426.01 22.963-2.16 23.356-15.24 17.534-19.953-.01-.034-.043-.063-.104-.088 0-.004-.002-.004-.002-.004a7.885 7.885 0 0 0-1.542-.943 21.636 21.636 0 0 0-5.13-1.626c-5.69-.586-10.881.227-15.426 1.673.411 1.833 1.05 4.46 1.588 6.638a34.346 34.346 0 0 1 6.798-1.66c7.188-.992 11.33 4.023 1.072 7.584-1.868.648-9.685 2.762-19.12.525 0 0-4.616-1.253-7.867-3.209-.012.01-.025.02-.035.03a13.41 13.41 0 0 1-1.257-.913 5.73 5.73 0 0 1-.216-.176 13.941 13.941 0 0 1-.366-.323c-.034-.033-.077-.062-.108-.097-.08-.077-.135-.142-.206-.214a8.455 8.455 0 0 1-.453-.503c-.054-.065-.112-.131-.154-.191-.898-1.144-1.45-2.476-1.399-4.047.127-3.97 3.001-8.184 7.106-11.495l-.382-3.52s-5.477-1.262-8.239-2.626c-5.339 3.143-8.554 8.854-8.554 8.854l.002.004c-2.797 5.287-2.945 13.328 5.007 19.991 1.982 1.499 5.14 3.806 13.28 5.472zM99.642 182.265c-11.233-16.997-57.31-5.535-67.678-13.626 0 0-1.42-1.14-.912-2.839a7.747 7.747 0 0 1 .896-1.467c-1.86-.434-4.86-1.36-7.87-3.238-.6.966-1.138 1.964-1.533 3.01-1.74 4.59 1.923 8.64 1.923 8.64 13.798 14.144 58.23-3.906 70.21 11.02 3.237 4.034 6.406 1.368 4.964-1.5zM15.633 55.574c1.503-2.05 3.66-4.726 6.287-7.27-5.223-3.575-9.005-8.079-11.373-14.326C6.915 24.38 12.23 11.902 19.44 9.036c9.305-3.701 18.495 2.534 20.835 9.694-.59 4.52-4.254 8.386-3.655 13.186.584 4.672 11.017 15.43 14.75 14.457 3.944-1.03 7.392-15.656 5.694-20.297-2.193-5.987-7.058-4.38-9.764-9.25-1.38-2.475-1.299-3.207-2.42-5.217C41.698 5.923 36.438 1.108 28.744.472 10.795-1.018.03 12.71 0 26.216c-.025 12.314 6.83 22.37 15.633 29.358z" />
                <path d="M49.576 180.853c.374.934.735 1.87 1.116 2.794 2.409 3.447 6.962 1.718 11.115-.855-.451-.883-.915-1.82-1.385-2.782l-10.846.843zM44.328 166.014c.382 1.239.78 2.463 1.185 3.681 2.4.224 7.072.254 10.383.237a164.927 164.927 0 0 1-1.548-3.889c-1.744.241-4.837.402-10.02-.029zM41.048 153.937c.92.22 6.379 1.023 9.448.744-2.242-7.513-4.117-15.813-5.168-24.769 8.695.46 26.325-1.891 39.124-16.314 18.463-20.806 8.978-60.674 6.247-78.435-1.178-7.68-.112-17.182 2.09-25.642.726-2.301 1.146-3.96 1.173-4.082C95.196 2.062 96.177 0 96.177 0s-.555.285-1.548.896a.503.503 0 0 0 .048-.025.269.269 0 0 0-.038.033c-.004-.002-.006-.008-.012-.008-1.623.817-18.341 8.778-36.967 21.252 1.742 1.946 2.237 4.07 2.249 5.836 4.541-2.843 9.292-5.597 13.625-8.174A122.157 122.157 0 0 0 65.192 31C43.61 63.68 36.231 94.234 36.875 122.1c-3.308-.486-10.046-2.05-15.281-6.981C3.524 98.098 8.008 69.677 40.153 42.352c-1.17-1.2-2.459-2.706-3.542-4.413C21.315 50.956 8.164 66.458 4.981 82.891c-6.926 35.786 22.49 44.498 32.24 46.387.617 8.494 1.96 16.714 3.827 24.66zM82.467 20.25c-.53 5.638-.013 15.367 1.962 28.078 2.057 13.255 8.768 41.553-10.107 63.184-8.654 9.916-24.447 10.626-29.666 10.975-1.86-29.86 5.915-65.817 37.81-102.237z" />
              </g>
              <path
                fill="#111"
                d="M141.735 93.241 130.32 77.633h-2.695v15.608H120V56.508h7.626v14.44h2.593l11.516-14.44h9.304l-14.236 17.566L151.47 93.24h-9.736zm39.61-36.733h7.627v36.733h-7.626v-15.1h-15.533v15.1h-7.626V56.508h7.626v14.998h15.533V56.508zM216 93.75c-10.803 0-18.786-7.372-18.786-18.888C197.214 63.32 205.196 56 216 56c10.779 0 18.76 7.321 18.76 18.862 0 11.516-7.981 18.888-18.76 18.888zm0-6.99c6.33 0 11.186-4.45 11.186-11.898 0-7.423-4.856-11.846-11.186-11.846s-11.185 4.423-11.185 11.846c0 7.449 4.856 11.897 11.185 11.897zm48.333-23.54h-13.626v8.338h12.075v6.635h-12.075v8.313h13.626v6.736H243.03V56.51h21.303v6.71zm9.106 30.021V56.508h13.295c11.72 0 17.515 7.372 17.515 18.354 0 11.008-5.796 18.38-17.515 18.38H273.44zm7.626-6.736h5.288c6.762 0 9.863-4.22 9.863-11.643s-3.101-11.642-9.863-11.642h-5.288v23.285zm52.882-23.285h-13.626v8.338h12.075v6.635h-12.075v8.313h13.626v6.736h-21.302V56.51h21.302v6.71zm24.385-6.712c7.194 0 11.668 5.338 11.668 11.872 0 6.685-4.474 11.693-11.668 11.693h-7.652v13.168h-7.626V56.507h15.278zm-1.272 17.184c3.813 0 5.593-2.11 5.593-5.414 0-3.178-1.78-5.39-5.593-5.39h-6.38v10.804h6.38zM131.109 114.226v2.977h-3.869v13.32h-3.35v-13.32H120v-2.977h11.109zm9.777 16.522c-4.793 0-8.334-3.27-8.334-8.38 0-5.12 3.541-8.368 8.334-8.368 4.782 0 8.323 3.248 8.323 8.368 0 5.109-3.541 8.38-8.323 8.38zm0-3.102c2.808 0 4.962-1.973 4.962-5.278 0-3.293-2.154-5.255-4.962-5.255s-4.962 1.962-4.962 5.255c0 3.305 2.154 5.278 4.962 5.278zm18.214-13.42c3.191 0 5.176 2.368 5.176 5.267 0 2.966-1.985 5.188-5.176 5.188h-3.395v5.841h-3.383v-16.296h6.778zm-.564 7.623c1.691 0 2.48-.936 2.48-2.402 0-1.41-.789-2.39-2.48-2.39h-2.83v4.792h2.83zm11.966 5.684h5.108v2.99h-8.492v-16.297h3.384v13.307zm7.691 2.99v-16.297h3.383v16.296h-3.383zm13.003.225c-3.496 0-6.225-1.68-6.721-4.737l3.496-.8c.225 1.826 1.568 2.773 3.36 2.773 1.377 0 2.47-.609 2.46-1.984-.012-1.534-1.816-2.02-3.801-2.628-2.391-.745-4.951-1.624-4.951-4.624 0-3.034 2.48-4.748 5.751-4.748 2.865 0 5.752 1.162 6.406 4.286l-3.27.812c-.305-1.625-1.399-2.335-2.932-2.335-1.365 0-2.527.564-2.527 1.906 0 1.252 1.602 1.67 3.451 2.222 2.459.744 5.368 1.691 5.368 4.94 0 3.462-2.898 4.916-6.09 4.916zm18.665-16.522v2.977h-3.868v13.32h-3.35v-13.32h-3.89v-2.977h11.108zm12.203 16.296L217 123.598h-1.195v6.924h-3.384v-16.296h3.384v6.406h1.15l5.109-6.406h4.127l-6.315 7.793 6.507 8.503h-4.32zm17.018-16.296h3.384v16.296h-3.384v-6.699h-6.89v6.7h-3.384v-16.297h3.384v6.654h6.89v-6.654zm14.819 16.522c-4.793 0-8.334-3.27-8.334-8.38 0-5.12 3.54-8.368 8.334-8.368 4.782 0 8.323 3.248 8.323 8.368 0 5.109-3.541 8.38-8.323 8.38zm0-3.102c2.808 0 4.962-1.973 4.962-5.278 0-3.293-2.154-5.255-4.962-5.255s-4.962 1.962-4.962 5.255c0 3.305 2.154 5.278 4.962 5.278zm20.887-10.443h-6.045v3.7h5.357v2.943h-5.357v3.688h6.045v2.988h-9.451v-16.296h9.45v2.978zm3.484 13.32v-16.297h5.898c5.2 0 7.77 3.27 7.77 8.143 0 4.883-2.57 8.153-7.77 8.153h-5.898zm3.384-2.99H284c3 0 4.376-1.872 4.376-5.165s-1.376-5.165-4.376-5.165h-2.345v10.33zm22.905-10.33h-6.045v3.7h5.357v2.943h-5.357v3.688h6.045v2.988h-9.45v-16.296h9.45v2.978zm10.263-2.977c3.191 0 5.176 2.368 5.176 5.267 0 2.966-1.985 5.188-5.176 5.188h-3.395v5.841h-3.384v-16.296h6.778zm-.564 7.623c1.691 0 2.48-.936 2.48-2.402 0-1.41-.789-2.39-2.48-2.39h-2.831v4.792h2.83z"
              />
            </svg>
          </Link>
          <Link  className="hidden w-28 dark:block" href="/">
            <svg viewBox="0 0 370 185.82">
              <g xmlns="http://www.w3.org/2000/svg" fill="#111">
                <path
                  fill="#fff"
                  d="m38.357 153.164-.99-4.152a63.874 63.874 0 0 0-2.873 2.051c2.082 1.361 3.863 2.101 3.863 2.101zM36.832 146.77c-.682.55-1.235 1.086-1.235 1.086l1.235-1.087z"
                />
                <path
                  fill="#fff"
                  d="M36.364 162.992c1.24.237 2.729.503 4.049.707.199.031.394.058.598.09.033.002.067.008.1.01 1.802.25 5.721.461 13.426.01 22.963-2.16 23.356-15.24 17.534-19.953-.01-.034-.043-.063-.104-.088 0-.004-.002-.004-.002-.004a7.885 7.885 0 0 0-1.542-.943 21.636 21.636 0 0 0-5.13-1.626c-5.69-.586-10.881.227-15.426 1.673.411 1.833 1.05 4.46 1.588 6.638a34.346 34.346 0 0 1 6.798-1.66c7.188-.992 11.33 4.023 1.072 7.584-1.868.648-9.685 2.762-19.12.525 0 0-4.616-1.253-7.867-3.209-.012.01-.025.02-.035.03a13.41 13.41 0 0 1-1.257-.913 5.73 5.73 0 0 1-.216-.176 13.941 13.941 0 0 1-.366-.323c-.034-.033-.077-.062-.108-.097-.08-.077-.135-.142-.206-.214a8.455 8.455 0 0 1-.453-.503c-.054-.065-.112-.131-.154-.191-.898-1.144-1.45-2.476-1.399-4.047.127-3.97 3.001-8.184 7.106-11.495l-.382-3.52s-5.477-1.262-8.239-2.626c-5.339 3.143-8.554 8.854-8.554 8.854l.002.004c-2.797 5.287-2.945 13.328 5.007 19.991 1.982 1.499 5.14 3.806 13.28 5.472z"
                />
                <path d="M99.642 182.265c-11.233-16.997-57.31-5.535-67.678-13.626 0 0-1.42-1.14-.912-2.839a7.747 7.747 0 0 1 .896-1.467c-1.86-.434-4.86-1.36-7.87-3.238-.6.966-1.138 1.964-1.533 3.01-1.74 4.59 1.923 8.64 1.923 8.64 13.798 14.144 58.23-3.906 70.21 11.02 3.237 4.034 6.406 1.368 4.964-1.5zM15.633 55.574c1.503-2.05 3.66-4.726 6.287-7.27-5.223-3.575-9.005-8.079-11.373-14.326C6.915 24.38 12.23 11.902 19.44 9.036c9.305-3.701 18.495 2.534 20.835 9.694-.59 4.52-4.254 8.386-3.655 13.186.584 4.672 11.017 15.43 14.75 14.457 3.944-1.03 7.392-15.656 5.694-20.297-2.193-5.987-7.058-4.38-9.764-9.25-1.38-2.475-1.299-3.207-2.42-5.217C41.698 5.923 36.438 1.108 28.744.472 10.795-1.018.03 12.71 0 26.216c-.025 12.314 6.83 22.37 15.633 29.358z" />
                <path d="M49.576 180.853c.374.934.735 1.87 1.116 2.794 2.409 3.447 6.962 1.718 11.115-.855-.451-.883-.915-1.82-1.385-2.782l-10.846.843zM44.328 166.014c.382 1.239.78 2.463 1.185 3.681 2.4.224 7.072.254 10.383.237a164.927 164.927 0 0 1-1.548-3.889c-1.744.241-4.837.402-10.02-.029zM41.048 153.937c.92.22 6.379 1.023 9.448.744-2.242-7.513-4.117-15.813-5.168-24.769 8.695.46 26.325-1.891 39.124-16.314 18.463-20.806 8.978-60.674 6.247-78.435-1.178-7.68-.112-17.182 2.09-25.642.726-2.301 1.146-3.96 1.173-4.082C95.196 2.062 96.177 0 96.177 0s-.555.285-1.548.896a.503.503 0 0 0 .048-.025.269.269 0 0 0-.038.033c-.004-.002-.006-.008-.012-.008-1.623.817-18.341 8.778-36.967 21.252 1.742 1.946 2.237 4.07 2.249 5.836 4.541-2.843 9.292-5.597 13.625-8.174A122.157 122.157 0 0 0 65.192 31C43.61 63.68 36.231 94.234 36.875 122.1c-3.308-.486-10.046-2.05-15.281-6.981C3.524 98.098 8.008 69.677 40.153 42.352c-1.17-1.2-2.459-2.706-3.542-4.413C21.315 50.956 8.164 66.458 4.981 82.891c-6.926 35.786 22.49 44.498 32.24 46.387.617 8.494 1.96 16.714 3.827 24.66zM82.467 20.25c-.53 5.638-.013 15.367 1.962 28.078 2.057 13.255 8.768 41.553-10.107 63.184-8.654 9.916-24.447 10.626-29.666 10.975-1.86-29.86 5.915-65.817 37.81-102.237z" />
              </g>
              <path
                fill="#111"
                d="M141.735 93.241 130.32 77.633h-2.695v15.608H120V56.508h7.626v14.44h2.593l11.516-14.44h9.304l-14.236 17.566L151.47 93.24h-9.736zm39.61-36.733h7.627v36.733h-7.626v-15.1h-15.533v15.1h-7.626V56.508h7.626v14.998h15.533V56.508zM216 93.75c-10.803 0-18.786-7.372-18.786-18.888C197.214 63.32 205.196 56 216 56c10.779 0 18.76 7.321 18.76 18.862 0 11.516-7.981 18.888-18.76 18.888zm0-6.99c6.33 0 11.186-4.45 11.186-11.898 0-7.423-4.856-11.846-11.186-11.846s-11.185 4.423-11.185 11.846c0 7.449 4.856 11.897 11.185 11.897zm48.333-23.54h-13.626v8.338h12.075v6.635h-12.075v8.313h13.626v6.736H243.03V56.51h21.303v6.71zm9.106 30.021V56.508h13.295c11.72 0 17.515 7.372 17.515 18.354 0 11.008-5.796 18.38-17.515 18.38H273.44zm7.626-6.736h5.288c6.762 0 9.863-4.22 9.863-11.643s-3.101-11.642-9.863-11.642h-5.288v23.285zm52.882-23.285h-13.626v8.338h12.075v6.635h-12.075v8.313h13.626v6.736h-21.302V56.51h21.302v6.71zm24.385-6.712c7.194 0 11.668 5.338 11.668 11.872 0 6.685-4.474 11.693-11.668 11.693h-7.652v13.168h-7.626V56.507h15.278zm-1.272 17.184c3.813 0 5.593-2.11 5.593-5.414 0-3.178-1.78-5.39-5.593-5.39h-6.38v10.804h6.38zM131.109 114.226v2.977h-3.869v13.32h-3.35v-13.32H120v-2.977h11.109zm9.777 16.522c-4.793 0-8.334-3.27-8.334-8.38 0-5.12 3.541-8.368 8.334-8.368 4.782 0 8.323 3.248 8.323 8.368 0 5.109-3.541 8.38-8.323 8.38zm0-3.102c2.808 0 4.962-1.973 4.962-5.278 0-3.293-2.154-5.255-4.962-5.255s-4.962 1.962-4.962 5.255c0 3.305 2.154 5.278 4.962 5.278zm18.214-13.42c3.191 0 5.176 2.368 5.176 5.267 0 2.966-1.985 5.188-5.176 5.188h-3.395v5.841h-3.383v-16.296h6.778zm-.564 7.623c1.691 0 2.48-.936 2.48-2.402 0-1.41-.789-2.39-2.48-2.39h-2.83v4.792h2.83zm11.966 5.684h5.108v2.99h-8.492v-16.297h3.384v13.307zm7.691 2.99v-16.297h3.383v16.296h-3.383zm13.003.225c-3.496 0-6.225-1.68-6.721-4.737l3.496-.8c.225 1.826 1.568 2.773 3.36 2.773 1.377 0 2.47-.609 2.46-1.984-.012-1.534-1.816-2.02-3.801-2.628-2.391-.745-4.951-1.624-4.951-4.624 0-3.034 2.48-4.748 5.751-4.748 2.865 0 5.752 1.162 6.406 4.286l-3.27.812c-.305-1.625-1.399-2.335-2.932-2.335-1.365 0-2.527.564-2.527 1.906 0 1.252 1.602 1.67 3.451 2.222 2.459.744 5.368 1.691 5.368 4.94 0 3.462-2.898 4.916-6.09 4.916zm18.665-16.522v2.977h-3.868v13.32h-3.35v-13.32h-3.89v-2.977h11.108zm12.203 16.296L217 123.598h-1.195v6.924h-3.384v-16.296h3.384v6.406h1.15l5.109-6.406h4.127l-6.315 7.793 6.507 8.503h-4.32zm17.018-16.296h3.384v16.296h-3.384v-6.699h-6.89v6.7h-3.384v-16.297h3.384v6.654h6.89v-6.654zm14.819 16.522c-4.793 0-8.334-3.27-8.334-8.38 0-5.12 3.54-8.368 8.334-8.368 4.782 0 8.323 3.248 8.323 8.368 0 5.109-3.541 8.38-8.323 8.38zm0-3.102c2.808 0 4.962-1.973 4.962-5.278 0-3.293-2.154-5.255-4.962-5.255s-4.962 1.962-4.962 5.255c0 3.305 2.154 5.278 4.962 5.278zm20.887-10.443h-6.045v3.7h5.357v2.943h-5.357v3.688h6.045v2.988h-9.451v-16.296h9.45v2.978zm3.484 13.32v-16.297h5.898c5.2 0 7.77 3.27 7.77 8.143 0 4.883-2.57 8.153-7.77 8.153h-5.898zm3.384-2.99H284c3 0 4.376-1.872 4.376-5.165s-1.376-5.165-4.376-5.165h-2.345v10.33zm22.905-10.33h-6.045v3.7h5.357v2.943h-5.357v3.688h6.045v2.988h-9.45v-16.296h9.45v2.978zm10.263-2.977c3.191 0 5.176 2.368 5.176 5.267 0 2.966-1.985 5.188-5.176 5.188h-3.395v5.841h-3.384v-16.296h6.778zm-.564 7.623c1.691 0 2.48-.936 2.48-2.402 0-1.41-.789-2.39-2.48-2.39h-2.831v4.792h2.83z"
              />
            </svg>
          </Link >
          <button aria-label="Toggle Menu" className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden " id="headlessui-disclosure-button-:r0:" type="button" aria-expanded="false" data-headlessui-state>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
        <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/archive">
            <span> Archive</span>
          </Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400" target="_blank" rel="noopener" href="https://stablo-pro.web3templates.com/">
            <span> Pro Version</span>
            <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">new</span>
          </Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400" target="_blank" rel="noopener" href="https://web3templates.com/templates/stablo-minimal-blog-website-template">
            <span> Download</span>
          </Link>
        </div>
      </div>
    </nav>

  )
}
