/* eslint-disable react/jsx-key, react/no-unescaped-entities */
import React from 'react';

export default function Help() {
  const content = {
    Web: [
<<<<<<< HEAD:src/js/help.js
      [
        "How do I search for a shabad?",
=======
      ['How do I search for a shabad?',
>>>>>>> Port to React:src/js/pages/Help/index.js
        `After launching SikhiToTheMax, by default you can search for a shabad by entering the
        first letter of each word. For example, if the shabad is ਗੁਰੁ ਮੇਰੈ ਸੰਗਿ ਸਦਾ ਹੈ ਨਾਲੇ , you '
        would enter "gmsshn". Alternatively, you can click on the gurmukhi keyboard icon and type
        in the letters manually.`,
      ],
      [
        "Can I separate the Gurbani from the English translations?",
        `When viewing a shabad or ang, click "Display Options" and then the "Split View" button
        in the drop down menu.`,
      ],
      [
        "What does the unicode button do?",
        `Unicode allows the Gumukhi text to be viewed without needing a pre-installed font. It will
        also allow you to copy and paste the text into vast variety of applications that you normally
        wouldn’t be able to do.`,
      ],
    ],
    Desktop: [
      [
<<<<<<< HEAD:src/js/help.js
        "Video Tutorial",
        `
          <div id="video">
            <div class="videoWrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDX8nPkDBSc"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
=======
        'Video Tutorial',

        <div id="video">
          <div className="videoWrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDX8nPkDBSc"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
>>>>>>> Port to React:src/js/pages/Help/index.js
          </div>
        </div>,

      ],
      [
<<<<<<< HEAD:src/js/help.js
        "How do I install the desktop application?",
        `You can install SikhiToTheMax (STTM) by visiting
=======
        'How do I install the desktop application?',
        <React.Fragment>
          You can install SikhiToTheMax (STTM) by visiting
>>>>>>> Port to React:src/js/pages/Help/index.js
          <a href="https://khalisfoundation.org/portfolio/sikhitothemax-everywhere/">this website</a>
          and choosing the Windows or macOS download link. After that, open the installer and follow
          the steps that are displayed.
          <img src="/assets/images/help/desktop-download.png" />
        </React.Fragment>,
      ],
      [
<<<<<<< HEAD:src/js/help.js
        "How do I search for a shabad?",
        `
        After launching STTM, by default you can search for a shabad by entering the first letter
         of each word. For example, if the shabad is ਗੁਰੁ ਮੇਰੈ ਸੰਗਿ ਸਦਾ ਹੈ ਨਾਲੇ , you would enter "gmsshn".'"
=======
        'How do I search for a shabad?',
        <React.Fragment>
          After launching STTM, by default you can search for a shabad by entering the first letter
           of each word. For example, if the shabad is ਗੁਰੁ ਮੇਰੈ ਸੰਗਿ ਸਦਾ ਹੈ ਨਾਲੇ , you would enter <code>gmsshn</code>.
>>>>>>> Port to React:src/js/pages/Help/index.js
          <img src="/assets/images/help/desktop-search-ex.png" />
          Alternatively, you can click on the gurmukhi keyboard icon and type in the letters manually.
          <img src="/assets/images/help/desktop-keyboard.png" />
        </React.Fragment>,
      ],
      [
<<<<<<< HEAD:src/js/help.js
        "What do the different search types do?",
        `
        <ul>
          <li>First Letter (Start)
=======
        'What do the different search types do?',
        <React.Fragment>
          <ul>
            <li>First Letter (Start)
>>>>>>> Port to React:src/js/pages/Help/index.js
            <ul>
                <li>The letters you input must be from the START of a line in a shabad.</li>
              </ul>
            </li>
            <li>First Letter (Anywhere)
            <ul>
                <li>The letters you input can be from any part of the line. For example, you can start your
              search by typing in the first letter of every word in the second half of a shabad’s line.</li>
              </ul>
            </li>
            <li>Full Word (Gurmukhi)
            <ul>
                <li>You can type in the full word(s) in gurmukhi that you are searching for.</li>
              </ul>
            </li>
            <li>English Translation (Full Word)
            <ul>
                <li>You can search for shabads via the english translations. For example, type in the word
              <code>bird</code> and the results will show all shabads that include a translation for "bird".</li>
              </ul>
            </li>
          </ul>
        </React.Fragment>,
      ],
      [
        'I can\'t find my shabad.',
        <ul>
          <li>
            STTM's database includes shabads from Sri Guru Granth Sahib Ji, Sri Dasam Granth Sahib,
            Bhai Gurdas Jee, Bhai Gurdas Singh Jee, Bhai Nand Lal Jee, and various rehatnamas and
            thankhanamas. If your shabad is not from one of those sources, it will not appear.
          </li>
          <li>
            If you verified your shabad should be in the database and it is still not coming up,
            make sure you are typing in the correct letters for search. If you aren’t sure about a
            letter, or are still having difficulties, try using one of the different search types to
            locate the shabad.
          </li>
        </ul>,
      ],
      [
<<<<<<< HEAD:src/js/help.js
        "How do I connect STTM to a projector?",
        `
=======
        'How do I connect STTM to a projector?',
        <React.Fragment>
>>>>>>> Port to React:src/js/pages/Help/index.js
          Plug in your computer to the projector or TV. Once you do this, go to your computer's
          display settings and change it to "Extended Desktop" (NOT mirroring). After that, launch
          STTM and turn on "Presenter View" in the settings!
          <img src="/assets/images/help/desktop-extend-pc.png" />
          <img src="/assets/images/help/desktop-extend-mac.png" />
        </React.Fragment>,
      ],
      [
<<<<<<< HEAD:src/js/help.js
        "How do I change the background color?",
        `After launching STTM, click the icon for settings, and choose your theme.
        <img src="/assets/images/help/desktop-theme.png" />`
      ],
      [
        "Can you view the Gurbani in Larivaar?",
        `Yes! After launching STTM, click the icon for settings, and choose the Larivaar option.
        <img src="/assets/images/help/desktop-larivaar.png" />`
      ],
      [
        "How can I make the fonts on the screen smaller?",
        `After launching STTM, click the icon for settings, and scroll down for options to
=======
        'How do I change the background color?',
        <React.Fragment>
          After launching STTM, click the icon for settings, and choose your theme.
        <img src="/assets/images/help/desktop-theme.png" />
        </React.Fragment>,
      ],
      [
        'Can you view the Gurbani in Larivaar?',
        <React.Fragment>
          Yes! After launching STTM, click the icon for settings, and choose the Larivaar option.
        <img src="/assets/images/help/desktop-larivaar.png" />
        </React.Fragment>,
      ],
      [
        'How can I make the fonts on the screen smaller?',
        <React.Fragment>
          After launching STTM, click the icon for settings, and scroll down for options to
>>>>>>> Port to React:src/js/pages/Help/index.js
        adjust the font size.
        <img src="/assets/images/help/desktop-font-size.png" />
        </React.Fragment>,
      ],
      [
<<<<<<< HEAD:src/js/help.js
        "Where can I see my previous shabads?",
        `When using STTM in “Presenter View”, your history will appear in the bottom right
=======
        'Where can I see my previous shabads?',
        <React.Fragment>
          When using STTM in “Presenter View”, your history will appear in the bottom right
>>>>>>> Port to React:src/js/pages/Help/index.js
        quadrant. You can click any of the shabads in the list to bring them back up as your
        primary one.
        <img src="/assets/images/help/desktop-history.png" />
        </React.Fragment>,
      ],
      [
<<<<<<< HEAD:src/js/help.js
        "How do I report a mistake?",
        `Visit <a href="https://sikhitothemax.org">SikhiToTheMax.org</a> and
        click "<a href="https://goo.gl/plk23h">Feedback</a>" at the bottom of the page.`
      ]
    ]
=======
        'How do I report a mistake?',
        <React.Fragment>
          Visit <a href="https://sikhitothemax.org">SikhiToTheMax.org</a> and
        click "<a href="https://goo.gl/plk23h">Feedback</a>" at the bottom of the page.</React.Fragment>,
      ],
    ],
>>>>>>> Port to React:src/js/pages/Help/index.js
  };

  const getTitle = question =>
    question
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-z.\-]/g, "")
      .substr(0, 50);

  const contentWithTitle = Object.keys(content).reduce(
    (o, header) => ({
      ...o,
      [header]: content[header].map(([question, answer]) => [
        getTitle(question),
        question,
        answer
      ])
    }),
    {}
  );

<<<<<<< HEAD:src/js/help.js
  const help = (
    <div class="body_text">
=======
  return (
    <div className='body_text'>
>>>>>>> Port to React:src/js/pages/Help/index.js
      <h2>Help</h2>

      <div id="help">
        <div id="sidebar">
          <ul>
<<<<<<< HEAD:src/js/help.js
            {Object.keys(contentWithTitle).map(header => (
              <li>
                <a href={`#${header}`}>{header}</a>
                <ul>
                  {contentWithTitle[header].map(([title, question]) => (
                    <li key={question}>
                      <a href={`#${header}-${title}`}>{question}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
=======
            {
              Object.keys(contentWithTitle).map(header => (
                <li key={header}>
                  <a href={`#${header}`}>{header}</a>
                  <ul>
                    {contentWithTitle[header].map(([title, question]) => (
                      <li key={question}>
                        <a href={`#${header}-${title}`}>{question}</a>
                      </li>),
                    )}
                  </ul>
                </li>
              ))
            }
>>>>>>> Port to React:src/js/pages/Help/index.js
          </ul>
        </div>

        <main>
<<<<<<< HEAD:src/js/help.js
          {Object.keys(contentWithTitle).map(header => (
            <section id={header} key={header}>
              <h3>{header}</h3>
              {contentWithTitle[header].map(([title, question, answer]) => (
                <div class="question" id={`${header}-${title}`} key={title}>
                  <h4>
                    <a href={`#${header}-${title}`}>#</a> {question}
                  </h4>
                  <div>{answer}</div>
                </div>
              ))}
            </section>
          ))}
=======
          {
            Object.keys(contentWithTitle).map(header => (
              <section id={header} key={header}>
                <h3>{header}</h3>
                {
                  contentWithTitle[header].map(([title, question, answer]) => (
                    <div className="question" id={`${header}-${title}`} key={title}>
                      <h4><a href={`#${header}-${title}`}>#</a> {question}</h4>
                      <div>{answer}</div>
                    </div>
                  ))
                }
              </section>
            ))
          }
>>>>>>> Port to React:src/js/pages/Help/index.js
        </main>
      </div>
    </div>
  );
<<<<<<< HEAD:src/js/help.js

  document.getElementById("content-root").appendChild(help);
=======
>>>>>>> Port to React:src/js/pages/Help/index.js
}