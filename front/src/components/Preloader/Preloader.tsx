type PreloaderProps = {
  isLoading: boolean,
  textPreloader: string
};

function Preloader({ isLoading, textPreloader }: PreloaderProps) {
  return (
    <div className={`preloader ${isLoading? "preloader_active":""}`}>
      <p className="preloader__text">{`...загружаем ${textPreloader} котиков...`}</p>
    </div>
  )
}

export default Preloader