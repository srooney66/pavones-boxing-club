export default async function VideoIframe({ srcUrl }: { srcUrl: string }) {
  if (!srcUrl)
    return (
      <p>
        <em>Missing video url.</em>
      </p>
    )
  return (
    <div className="iframe-wrapper mx-auto max-w-4xl">
      <iframe
        src={srcUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  )
}
