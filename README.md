## [PL] O stronie

Jest to moja Strona Landing Page z 4 sekcjami, Banner, Skills, Porfolio oraz Kontakt.

Banner z krótkim opisem o mnie, o posiadaniu wieloletnim doświedczeniu w pracy na Wordpressie i zaczałem naukę z takimi frameworkami jak React, Next.js oraz Typescript.
Kiedy tylko na internecie zobaczyłem obraz ręki robota od razu wpadł mi pomysł na animację ręki oraz lekko opuźnionego ruchu lewitujących kart/warstw nad ręką. 
Myślę że ruch trzech kart sprawia wrażenie oczywistości że można myszką na nie najechać aby je rozdzielić. Niestety nie miałem pomysłu co mógłbym zawrzeć w tych kartach więc są to losowo pasujące do koloru strony obrazki przedstawiające UI jakiejś aplikacji do smart house.

Sekcja umiejętności, tutaj jest równierz krótki opis, moich umiejętności. Tutaj wpadł mi do głowy pomysł na zrobienie czegoś ciekaweszego niż po prostu wstawienie w nieruchome bloki. Z powodu tego że to ręce piszą kod na klawiaturze postanowiłem wstawić obraz rąk trzymających tytuł Moje umiejętności a po najechaniu myszką na dłonie efekt rozproszenia/rozdzielenia tytułu i ukazanie w animacji z poziomem każdej z umiejętności na podstawie tego jak ja się czuję że posiadam wiedzę.

Sekcja portfolio, na której znajdują się projekty wykonane przezemnie, niestety niektórych projektów nie mogłem zawrzeć gdyż niektóży klientci zrezygnowali ze swojej działalności, a po przestaniu opłacania swojego serwera, strony zostały zdjęte. Zawarty jest też tutaj dłuższy tekst opisujący dlaczego lub do czego została uzyta dana technologia, aby zainteresowana osoba wiedziała na którą kategorię najpierw zerknąć.

Sekcja kontakt, krótki opis dlaczego warto się ze mną skontaktować, tutaj również wpadł mi do głowy pomysł z przekrzywiającym się telefonem z oszukanym efektem 3D za pomoca samego CSSa. Starałem się z optymalizowac animację jak tylko się dało zmieniając zasadę działania warstw, pozbywając zmieniających się borderów i użyciu warswtw z kolorem tła które zmienia swoją pozycję.
Jedyny działający link jest do mojego repozytorium na GitHubie z projektami wykonanymi na React/Next.js. E-maila oraz mojego prywatnego numeru telefonu nie chcialem publikować, ale nie chciałem aby na przezentowanym telefonie widziały pustki. Można ukryć te dane ale niestety nie jest to gwarantowana ochrona przed botami a nie chciałbym otrzymywać zbędnego spamu.
Również nigdzie w portalach społecznościowych nie udostępniam swojego pełnego imienia i nazwiska a w szczególności zdjęcia.
Numer Telefonu, e-mail oraz zdjęcie mojej osoby jedynie udostępniam po przez CV które przesyłam w odpowiedzi na oferty Pracy. 


## Jak uruchomić?

1.`npm install` - instaluje wszystkie wymagane biblioteki i zależności dla projektu. Ta komenda powinna być wywołana po pobraniu projektu i przed jego uruchomieniem.

2.`npm run dev` - uruchamia serwer deweloperski, który śledzi zmiany w kodzie i automatycznie przeładowuje stronę w przeglądarce, gdy nastąpi zmiana. To podstawowa komenda do uruchomienia projektu w trybie deweloperskim.

Opcjonalne uruchomienie statycznie:

1.`npm run build` - buduje projekt, czyli tworzy pliki statyczne, które będą używane do wyświetlania strony internetowej. Ta komenda powinna być wywołana tylko przed wdrożeniem strony na serwer produkcyjny.

2.`npm run start` - uruchamia serwer produkcyjny i wyświetla stronę internetową. Ta komenda powinna być wywołana tylko po użyciu komendy npm run build, ponieważ wymaga plików statycznych, które są generowane przez tę komendę.

## Default

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
