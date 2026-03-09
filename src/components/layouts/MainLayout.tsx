interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="py-8 px-4 bg-[url(assets/images/background-mobile.png)] bg-cover bg-bottom
    md:bg-[url(assets/images/background-tablet.png)] lg:bg-[url(assets/images/background-desktop.png)]">
      <img 
        src="/public/assets/images/pattern-squiggly-line-top.svg" 
        alt="pattern squiggly line top"
        className="absolute top-4 right-0 h-[52px] md:h-[100px] lg:h-[200px]"
      />
      <header className="flex justify-center mb-10">
          <img 
          src="/public/assets/images/logo-full.svg" 
          alt="logo" 
      />
      </header>
      {children}
    </main>
  )
}

export default MainLayout