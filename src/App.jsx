import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Bot,
  CalendarCheck,
  Calculator,
  Check,
  ChevronRight,
  CirclePlay,
  CloudDownload,
  Droplets,
  FlaskConical,
  Gamepad2,
  HeartPulse,
  Home,
  Languages,
  Leaf,
  Library,
  LockKeyhole,
  HandHeart,
  Megaphone,
  Medal,
  Moon,
  PawPrint,
  Play,
  Plus,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Trophy,
  Trash2,
  UserRound,
  Vote,
} from "lucide-react";

const profiles = [
  {
    id: "yagmur",
    name: "Yagmur",
    level: 3,
    points: 245,
    streak: 4,
    focus: "Space",
    quizzesCompleted: 12,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApOwh5qBLyB2P4-kmU6H-rgW7aEFJ4uBcm0xPoQg9nBrB80iEaddjrPcY8avCmPOWN-85TOxBYxyZpN1GtsKOVQEqJfTWhpFfguL6pZFfJdONqeSfU-XbeUiKPY9GoWuhkyL_pe746weWuyaAv3ES60wYulnTmQ4PDn3_fUEAqhBnrGk68YuP_w5d-gJnQdDSBpOkkqY3K1rDMcsLyUBPt4nSO3f0WTAggLRqQao6ueraJzxAy-u_exNYWISOjWeKoamokasQsXus",
  },
  {
    id: "umay",
    name: "Umay",
    level: 2,
    points: 180,
    streak: 2,
    focus: "Environment",
    quizzesCompleted: 5,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6P157U7ZJo3nPqoDU3_HTlFUhyrGUCeMNO7Y_aWlDsF9YpUtQnwlGIxdraTN1b8O6vPoX5Vhnx2RGRccOu05LN_XsBOSZrVcMf5-8wYURqEW2oSEnxcHmRFjkn1ZSi3HUubBIA_GB9ZTkr4qsu14Yq72dKF-rdbxY8b-O6dx0Cu0bR6hEvFeBjXUfHtu5b30bzmtPqwcVWfW3oDs8RRZSvil69GNnYQIFx0VlXYag-WC5RczzZrb_s3EBc-DE4ZtaI9yi0iaSUqE",
  },
  {
    id: "derin",
    name: "Derin",
    level: 4,
    points: 390,
    streak: 7,
    focus: "Inventors",
    quizzesCompleted: 24,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8YdlrmYuUTQO9Q-9HvYE28svnks81ePSSGp0CzsJLLruw8LcOLFVPtbmH4y9HmShhX0n7uBTvm7QUe1zj3RwhaWj0E45LOQicoi8R2Udg-RTzXWtKqW1ZebLpxV2O3zinbDoALx_BelaPplmy3L7AiNXbt-FAqBrR8cXxks1qfSNd_Pi3ut5IMvkRUuUy3w6gaS3WwuJh1ap01hJ3-ZDFmWlD-GQm5NHcRW1PmO0gRJ9nRR7iDd59tY3M5q7ejeFBDoPTJaOdDoo",
  },
];

const imageAssets = {
  dailyAdventure:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzD7Ry0QOWisLL2vhSwnLN6P7TEt6X7oe0cL8WkNZV-Va1SHVECFQPhfw137qtZLix4Xdj584uGq0Aw_7wB4po2-QJTQXsHcDu5MhNFKN7sG0Ipr3sXGaR8OGgKrwRR3CcOBn6f05X7ckOs7e7-WyFqcGTziVfC0t4bCr_UXtPFFr5brxFlRSNT0qE7xPdMnI7zpQayIDXM5nk1mEJacF1dLS6AFM3pasQeJOr__AUYnTk_H9hhhJGKRHQvVPsJ0hbwcuQm7vWnjM",
  spaceLesson:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBf7qKyw5i1RISB7u7ma-zT0wdwSdH-NPjOgDUN-oqP9ZuIYauTJGzLl29TUKfu1Z99YAV0XENjjhCe9u1I_2LKKQ7z97bZIUau1JZDaCj3mkm80mN-yDXk66LdW03_uq_fkozWLPZyHYDXa-Rw4loLsl6Ox7p0kIzkNgJS0PtSjn7iKwY4J5VrZopnWm5BrrfFMXxrFHSSlpv_YSOTUMboUTqpxRYw7C3X_6u0moqT-HFzxTmEQzvH2XgdkNT5QzOhekGvS6v7em0",
  mathLesson:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5YajQF0HCUAhOlCeG8xkhjSZaJ66xqgTKnoEUhB1gy2uinpdwswF-nK6B8H1p2aOm78tncMWa1fMYazQ2tWsJYbolpcJiA_afk_UkvT3vu8zCj2aoMNdV6xEuWfzPsjIYkgdXgFPkOCkNHh8VhSzCxc8i7IDT-ip5i2leIMt0T0y58OpVmNOul0o7ArFFSh_6foTSa3iG438U_LVTO7w57x9jG9ybRM-cEDusmm54CgApX7kzDsRhj-oliiNUxB6LqgNebU8fCBM",
  scienceCategory:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBy_gswpvAo-apaFQunJGB16_TO1zq9Whh7YB5ytygXb4aj2nhhVcAOrIa0I6Pq-7n_TX0u_YEhfJ3FLyvzLxpVuHFxrJ5w-Ojic2m23tMiN2yK-B4KKxKfEZKz5pxov_kVEneOsEKQ56uFINBcaVvl_H7gQVXFT4uJaw1MHZd3ulad8_APqW527rcHpCfzg1kaZAV9NYeyPtciMwhVeGtWjSaRGwj6SbnOJ-Wk1rQ7lGrCXdRQkurGKa4RdSGBbg2HHwQ5xWM4EwA",
  mathCategory:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQJZwmG7KmYXfAByseLh14VawZBd9wED8XaQB9tsW7e-KlJ0oZZHj0Ow6kQhUymyd1SjCgoV1pcqTBMkU9fAYVpHktl-Ls7sCC6MJNVnIbMNMrKRheRbsAnTW5yLF_0-1iIXOJnWHvg5svgaj8_bCLRBcH7sgN1CVq5WX1VMCrb98MqvVnXFFCwct7UFIDWt2gQHJWm6DOyXXYkbOXHDP9Nu-sVwseuvg1mAaMAj_QkCCOyUFET5SMopb-BPQRT03p20mbl-K9r2Y",
  healthCategory:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD2cB4fVgADEp-TEOz7wt9NSr12DyBvkVN6XvR8FEEcppGaRT8-BRItNSJ4YzdkwwR_4BG4lg5nQTfQ_z0eAeWYgWOuWOv0TG_jSBAqEDwoXW4P2NnF_4aidr-JbvndnvjoAi8tRPEu0LfEv_ZgYjNRm0LV0vAcwtNXNuhqGIlSnB4_sFW7PAF_WxYTG6asUNYIlq4ypPiGH-36gAYSPbcSGQ2bo3IOFxpxUh2YFo62ft8qVg7gAKoQCkFhzKbVmKHtVkDOFs--n_8",
  environmentCategory:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDR6F6NmPzVpaXUNPPqaqz5b5JrwApGU8U5fxpknrYqc8sMGpIWW9zlXdxHsjE1PxNj5R3dV-jjg99Z7iDzeMHFV09bof2YYW_vLbH7WR4EF2CyG9NAIAwVBgjpA-xNAtCCCoroGQeMfqO9dOfckXeEuwiW1kx-ltSZQrdaYFfyoMpPW2G8ejSsl8jcNPDOCmhe2LEciXJugKs8ML_qQI6AdSeYsYSiiFJG3WOdu0ZyHKof_wuV-qIpRG6HBKvSAA-h_CARFRxoW6g",
  robotLesson:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJiWTMBl4AMCxqAQkA73IbqRDsRJPwbRznntBFvsuY3Ngl-pNGQFLbwVlcUDSq8JPyoJ4mE9lwX4d0BZEkScwV5S1rFeX1RlXhab1g_Q8kjdEGXPsbRh7kZk929bqLKiDNtOZ67a_NLivAp1p3Qyu8DaRVUnV87IoSJ5E9YzJZarXS5J0RK_wXBtozVXTlqUCGfsyT6MsOsRQQWu7qfMi5sw4LrFEheR7eexFHaPZ14M4o99BaWMlsGzZiMxD6Nr2_0zQJVcoXMoU",
  mazeGame:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAF9tRmENkYq6oVSOXO8HqUO0x-vdEWxx0q31beqMU3ZJsX4fDqruNB-tWrpaRxZUjtRN1nMOEKrO7XhLOrIsS613iNQZp5_X_ux01mYjaXlHziCbA9x4QvBaYZpgDsDscx3gDNyx-t8R2b4ffeO4v0C6nVc4RRbqM-67cv94hgpmpMAjYC78bcRs69rDvn0cCnxLH8-2hzzbDBQM-a5kWK2tcPXGw6vGn90hgtu9Hh0sDqQzIPFuRyNwRPk4eeh2vD62zHQr_OFN4",
  underwaterLesson:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwXiOLwl7UT_gfEOEtPIk-YkfDzv9UAaPwfQnpILluiVpibv5J4hBagkOfPDoJgAWsrX3wkSZQ1u0_zDPNvcjjcRfXbpaN1qyiwWv0xwhB2EFNpSXXzv4a68jdX_rlv0Hp1RMJreZ7NWQuQew0LcNV387uoOWGXK6EwSu8j1RdLo6SmyOmJ1B5eCNtwYIK0wT4pqSvUePz3oZvvPWbvAdnDBSGYP44gLkzkvntSNeS-iXzFwuhvq032sY288crgfOtHyQqj8S0x0",
  owlGuide:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArzQ4osEe7bNTH33ACndjZ3gZ5lCFrWi1r-ny0dgwQSC44rJYKph0L5Ik_f3wDbiMYGyLlSd7dSBzCccv2F1B0j0DsTtIp1BcgKTlNe3VOV4ecOLXAdi3_VAITOFN8wbtEmNgawhKo5uzr3_Iqavl81L3bioCz8Zfzcw3j_CHHlqavy1Eiepylt-rnj2U17KcBQOAePMTQN4GYwyzxMr2HjQjwfzQ8IO96qNklyGWoHUpTEAsaLtF2wAIcFWcfwiFVN5cxxl0NKdY",
  voteRobot:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2FQl-bAhXsH3l8jwKSdR_hgL9QLgRtXjcudKggaumPgvBtcsldCo051Re9nCIgj1Uixtm8wlarwylPiZzOWu0O6flEkkiJSN6gQ207RMqIF8HsKCkPpEZoZYxLOTgEdwAb6HTjfgB7_EiJJS_fMVlanJL8byUZqMuH5ni95orK2k5vSDmGoICTq7_ycllfQqY8WZXBOsEOwq4f02eevuW_tusRaMhj-NdwvDZ170pa2Hszz24J4YD5mMOPAYAVU8KPOYWpvn97Q",
  deepOcean:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBEyr-OgdNtOvWtYfZKvhL48_cBb4KBsSWCZAprGoMVYvnslMTsvLSv4OI7cplkioPO6KrCYb6dS37YdBOSjCfcW6WP8kHzlDlfmWkr0A0aggPAn1jZ7vNcoJXo920xDJxAKhaZ90BUwFjmc0tJ_yKz85T4A4dNDUgFJVUPQRs_U6gnOaYE2h9Rvvmqxy3lfHSZgCd0-7hQOe20HvNE_dAHa6KoVF0EkUCnVFlZfXCyMaJY-W6ihGWISX3c0Tx7bf7p6LPvg_HJtbM",
  badge:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC6KZAr_9KxWKiJQr5BtO4OdyG1F5ZHQYbzEhaIBt6hsSrZ72Uue9QhET6kwEYeL0_REDMB4K-gV-mzj-EMZvHZ52TbCu-BZY35y01JJ0v8Vn6n9zRwCY5yll7ZJ5jc0onKmmawKlArNUSIbYsMMVso844WlU0wYM7kdJxftolBhsDxT5JG3Fwo6fBe7p_df18_48JighmsjQKfycbrkerlCJTqjc2NDq0iH6txNhyBzYmdxk83nIzkZ2qocdg58cFQ3dt1Zjy7hZY",
};

const categories = [
  {
    id: "science",
    title: "Science",
    description: "Explore how things work.",
    icon: FlaskConical,
    tone: "teal",
    image: imageAssets.scienceCategory,
  },
  {
    id: "math",
    title: "Math",
    description: "Play with numbers and puzzles.",
    icon: Calculator,
    tone: "indigo",
    image: imageAssets.mathCategory,
  },
  {
    id: "space",
    title: "Space",
    description: "Travel through stars and planets.",
    icon: Rocket,
    tone: "slate",
    image: imageAssets.spaceLesson,
  },
  {
    id: "health",
    title: "Health",
    description: "Learn how bodies stay strong.",
    icon: HeartPulse,
    tone: "rose",
    image: imageAssets.healthCategory,
  },
  {
    id: "environment",
    title: "Environment",
    description: "Discover nature and climate.",
    icon: Leaf,
    tone: "mint",
    image: imageAssets.environmentCategory,
  },
];

const lessons = [
  {
    title: "Solar System Tour",
    subject: "Space",
    duration: "15 mins",
    progress: 3,
    total: 4,
    downloaded: true,
    tone: "space",
    image: imageAssets.spaceLesson,
  },
  {
    title: "Counting Blocks",
    subject: "Math",
    duration: "10 mins",
    progress: 1,
    total: 3,
    downloaded: true,
    tone: "math",
    image: imageAssets.mathLesson,
  },
  {
    title: "Simple Machines",
    subject: "Science",
    duration: "12 mins",
    progress: 0,
    total: 4,
    downloaded: false,
    tone: "science",
    image: imageAssets.robotLesson,
  },
];

const quizzes = [
  { title: "Moon phases", action: "Take", score: "0/10", theme: "sun" },
  { title: "Gravity basics", action: "Retake", score: "5/10", theme: "sky" },
];

const games = [
  { title: "Planet Path", type: "Can be played any time", theme: "maze" },
  { title: "Machine Workshop", type: "Unlocked after video", theme: "workshop" },
];

const voteOptions = [
  {
    id: "robots",
    label: "Robotics Lab",
    button: "Vote for Robots",
    option: "Option A",
    description: "Discover how machines learn, move, and help us build the future.",
    percent: 60,
    image: imageAssets.voteRobot,
    icon: Bot,
    tone: "primary",
  },
  {
    id: "ocean",
    label: "Deep Ocean",
    button: "Vote for Deep Sea",
    option: "Option B",
    description: "Dive into the midnight zone and meet glowing creatures of the abyss.",
    percent: 40,
    image: imageAssets.deepOcean,
    icon: Droplets,
    tone: "tertiary",
  },
];

const badgeItems = [
  {
    id: "first-lesson",
    title: "First Lesson Complete",
    icon: Medal,
    unlocked: true,
    detailTitle: "Animal Friend",
    description:
      "You earned this by completing 5 pet care activities this week. Great job taking care of your furry friends!",
    activities: 5,
    earnedOn: "Oct 24",
    image: imageAssets.badge,
    tone: "animal",
  },
  {
    id: "science-explorer",
    title: "Science Explorer",
    icon: Trophy,
    unlocked: true,
    detailTitle: "Science Explorer",
    description:
      "You earned this by finishing your first science quest and exploring how experiments help us understand the world.",
    activities: 3,
    earnedOn: "Oct 26",
    image: imageAssets.scienceCategory,
    tone: "science",
  },
  { id: "month-streak", title: "1 month streak", icon: Award, unlocked: false },
];

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "library", label: "Library", icon: Library },
  { id: "vote", label: "Interactive", icon: Vote },
  { id: "profile", label: "Profile", icon: UserRound },
];

function App() {
  const [stage, setStage] = useState("welcome");
  const [activeProfileId, setActiveProfileId] = useState(profiles[0].id);
  const [activeView, setActiveView] = useState("home");
  const [selectedVote, setSelectedVote] = useState("robots");
  const [selectedBadge, setSelectedBadge] = useState(badgeItems[0]);
  const [selectedTopic, setSelectedTopic] = useState(categories[0]);
  const [userProfiles, setUserProfiles] = useState(profiles);
  const contentRef = useRef(null);

  const activeProfile = useMemo(
    () => userProfiles.find((profile) => profile.id === activeProfileId) ?? userProfiles[0],
    [activeProfileId, userProfiles],
  );

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [activeView]);

  if (stage === "welcome") {
    return <WelcomeScreen onStart={() => setStage("create")} onLogin={() => setStage("profiles")} />;
  }

  if (stage === "create") {
    return <CreateProfileScreen onCreate={() => setStage("profiles")} onBack={() => setStage("welcome")} />;
  }

  if (stage === "profiles") {
    return (
      <ProfilePicker
        profiles={userProfiles}
        selectedProfileId={activeProfileId}
        onSelectProfile={setActiveProfileId}
        onContinue={() => setStage("app")}
      />
    );
  }

  return (
    <main className="app-canvas">
      <style>{`
        .category-rail {
          gap: 20px !important;
        }
        .category-tile.compact {
          width: 148px !important;
          height: 148px !important;
          min-height: 0 !important;
          padding: 16px 12px !important;
          border-radius: var(--radius-lg) !important;
        }
        .category-tile.compact .category-copy {
          gap: 8px !important;
        }
        .category-tile.compact .category-icon {
          width: 56px !important;
          height: 56px !important;
        }
        .category-tile.compact strong {
          font-size: 0.95rem !important;
        }
      `}</style>
      <section
        className="app-shell"
        aria-label="ANIMA mobile prototype"
      >
        <AppTopBar
          profile={activeProfile}
          onProfileClick={() => setActiveView("profile")}
          onHomeClick={() => setActiveView("home")}
        />
        <div className={`app-content ${(activeView === "badgeDetail" || activeView === "quiz") ? "detail-view" : ""}`} ref={contentRef}>
          {activeView === "home" && (
            <HomeScreen
              profile={activeProfile}
              onNavigate={setActiveView}
              onSelectTopic={(topic) => {
                setSelectedTopic(topic);
                setActiveView("lessonLibrary");
              }}
            />
          )}
          {activeView === "library" && (
            <LibraryScreen
              onNavigate={setActiveView}
              onSelectTopic={(topic) => {
                setSelectedTopic(topic);
                setActiveView("lessonLibrary");
              }}
            />
          )}
          {activeView === "lessonLibrary" && (
            <LessonLibraryScreen
              topic={selectedTopic}
              onNavigate={setActiveView}
              onLaunchQuiz={() => setActiveView("quiz")}
            />
          )}
          {activeView === "profile" && <ProfileScreen profile={activeProfile} onNavigate={setActiveView} />}
          {activeView === "vote" && <VotingScreen selectedVote={selectedVote} onSelectVote={setSelectedVote} />}
          {activeView === "badges" && (
            <BadgesScreen
              profile={activeProfile}
              onSelectBadge={(badge) => {
                setSelectedBadge(badge);
                setActiveView("badgeDetail");
              }}
            />
          )}
          {activeView === "badgeDetail" && (
            <BadgeDetailScreen badge={selectedBadge} onBack={() => setActiveView("badges")} />
          )}
          {activeView === "quiz" && (
            <QuizScreen
              profile={activeProfile}
              onBack={() => setActiveView("lessonLibrary")}
              onComplete={(points) => {
                setUserProfiles((prev) =>
                  prev.map((p) =>
                    p.id === activeProfileId
                      ? {
                          ...p,
                          points: p.points + points,
                          quizzesCompleted: (p.quizzesCompleted ?? 12) + 1,
                        }
                      : p
                  )
                );
                setActiveView("lessonLibrary");
              }}
            />
          )}
        </div>
        {(activeView !== "badgeDetail" && activeView !== "quiz") && <BottomNav activeView={activeView} onChange={setActiveView} />}
      </section>

    </main>
  );
}

function WelcomeScreen({ onStart, onLogin }) {
  return (
    <main className="app-canvas auth-canvas">
      <section className="auth-shell">
        <LogoMark />
        <div className="welcome-hero-art" aria-hidden="true">
          <img
            src={imageAssets.dailyAdventure}
            alt="ANIMA Adventure"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
          />
        </div>
        <div className="auth-copy">
          <p className="eyebrow">Accessible animated learning</p>
          <h1>ANIMA</h1>
          <p>Learn through calm stories, playful games, and offline adventures.</p>
        </div>
        <div className="action-stack">
          <button className="tactile-button primary" type="button" onClick={onStart}>
            <Play size={20} />
            Start Learning
          </button>
          <button className="tactile-button neutral" type="button" onClick={onLogin}>
            <UserRound size={20} />
            Sign in
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

function CreateProfileScreen({ onCreate, onBack }) {
  return (
    <main className="app-canvas auth-canvas">
      <section className="auth-shell form-shell">
        <LogoMark />
        <div className="screen-heading">
          <h1>Start Learning</h1>
          <p>Create a profile for saved progress and offline lessons.</p>
        </div>
        <label className="field">
          <span>Name</span>
          <input type="text" defaultValue="Yagmur Hilalogu" />
        </label>
        <label className="field">
          <span>Username</span>
          <input type="text" defaultValue="yagmur" />
        </label>
        <label className="field">
          <span>Password optional</span>
          <input type="password" defaultValue="anima" />
        </label>
        <label className="check-line">
          <input type="checkbox" defaultChecked />
          <span>Skip password for shared devices</span>
        </label>
        <button className="tactile-button primary" type="button" onClick={onCreate}>
          Create Profile
        </button>
        <button className="text-action" type="button" onClick={onBack}>
          Back
        </button>
      </section>
    </main>
  );
}

function ProfilePicker({ profiles, selectedProfileId, onSelectProfile, onContinue }) {
  return (
    <main className="app-canvas auth-canvas">
      <section className="auth-shell">
        <LogoMark />
        <div className="screen-heading">
          <h1>Who's learning today?</h1>
          <p>Choose a profile to continue the adventure.</p>
        </div>
        <div className="profile-list">
          {profiles.map((profile) => (
            <button
              className={`profile-choice ${selectedProfileId === profile.id ? "selected" : ""}`}
              key={profile.id}
              type="button"
              onClick={() => onSelectProfile(profile.id)}
            >
              <span className="mini-avatar">{profile.name.slice(0, 1)}</span>
              <span>
                <strong>{profile.name}</strong>
                <small>Level {profile.level} explorer</small>
              </span>
              {selectedProfileId === profile.id && <Check size={20} />}
            </button>
          ))}
        </div>
        <button className="add-profile" type="button">
          <Plus size={20} />
          Add New Profile
        </button>
        <button className="tactile-button primary" type="button" onClick={onContinue}>
          Continue
        </button>
      </section>
    </main>
  );
}

function LogoMark() {
  return (
    <div className="logo-mark">
      <span className="logo-star">
        <Star size={22} />
      </span>
      <span>ANIMA</span>
    </div>
  );
}

function AppTopBar({ profile, onProfileClick, onHomeClick }) {
  return (
    <header className="app-topbar">
      <button
        aria-label="ANIMA stars"
        className="icon-button"
        type="button"
        onClick={onHomeClick}
      >
        <Star size={25} />
      </button>
      <strong className="app-title">ANIMA</strong>
      <button className="profile-avatar-button" type="button" onClick={onProfileClick} aria-label="Profile">
        <img src={profile.avatar} alt={`${profile.name} profile`} />
      </button>
    </header>
  );
}

function BottomNav({ activeView, onChange }) {
  const currentTab =
    activeView === "lessonLibrary"
      ? "library"
      : activeView === "practice"
        ? "vote"
        : activeView === "badges" || activeView === "badgeDetail"
          ? "profile"
          : activeView;

  return (
    <nav className="bottom-nav" aria-label="App tabs">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = currentTab === item.id;
        return (
          <button
            className={active ? "active" : ""}
            aria-current={active ? "page" : undefined}
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
          >
            <Icon size={25} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function HomeScreen({ profile, onNavigate, onSelectTopic }) {
  return (
    <div className="screen-stack">
      <section className="hero-greeting">
        <h1>Hello, {profile?.name || "Explorer"}!</h1>
        <p>Let's find something fun to do.</p>
      </section>

      <section className="daily-card">
        <div className="daily-art" aria-hidden="true">
          <img src={imageAssets.dailyAdventure} alt="" />
        </div>
        <div className="daily-overlay">
          <div>
            <span className="feature-chip">Featured</span>
            <h2>Daily Adventure</h2>
          </div>
          <button className="play-fab" type="button" onClick={() => onNavigate("library")} aria-label="Play Daily Adventure">
            <CirclePlay size={40} />
          </button>
        </div>
      </section>

      <SectionHeader title="Categories" />
      <div className="category-rail">
        {categories.map((category) => (
          <CategoryTile key={category.id} category={category} compact onClick={() => onSelectTopic(category)} />
        ))}
      </div>

      <SectionHeader title="Ready for Offline" />
      <div className="lesson-list">
        {lessons.slice(0, 2).map((lesson) => {
          const topic = categories.find(c => c.title.toLowerCase() === lesson.subject.toLowerCase()) || categories[0];
          return (
            <LessonRow key={lesson.title} lesson={lesson} onClick={() => onSelectTopic(topic)} />
          );
        })}
      </div>
    </div>
  );
}

function LibraryScreen({ onNavigate, onSelectTopic }) {
  return (
    <div className="screen-stack">
      <section className="screen-heading">
        <h1>Explore Library</h1>
        <p>Find new topics to learn and play.</p>
      </section>

      <label className="search-field">
        <span>Search Topics</span>
        <div>
          <Search size={24} />
          <input type="text" placeholder="What do you want to learn?" />
        </div>
      </label>

      <div className="filter-row">
        <button className="active" type="button">
          <Sparkles size={18} />
          Newest
        </button>
        <button type="button">
          <Star size={18} />
          Popular
        </button>
        <button type="button">
          <CloudDownload size={18} />
          Offline
        </button>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryTile key={category.id} category={category} library onClick={() => onSelectTopic(category)} />
        ))}
      </div>

      <SectionHeader title="Learning paths" />
      <div className="quick-actions">
        <ActionCard icon={BookOpen} title="Animation Lesson" copy="Watch a calm story lesson." onClick={() => onSelectTopic(categories[0])} />
        <ActionCard icon={Gamepad2} title="Knowledge Quest" copy="Practice with games." onClick={() => onSelectTopic(categories[0])} />
        <ActionCard icon={Vote} title="Next Adventure" copy="Vote for next week's topic." onClick={() => onNavigate("vote")} />
      </div>
    </div>
  );
}

function LessonLibraryScreen({ topic, onNavigate, onLaunchQuiz }) {
  const downloadableItems = [
    {
      title: topic.id === "science" ? "Meet Robo-Friend" : `${topic.title} Adventure`,
      description:
        topic.id === "science"
          ? "Learn how characters move and say hello in this fun introduction."
          : `Start a calm animated lesson about ${topic.title.toLowerCase()}.`,
      type: "Lesson",
      size: "120 MB",
      image: topic.id === "science" ? imageAssets.robotLesson : topic.image,
      tone: "primary",
    },
    {
      title: topic.id === "math" ? "Shape Sorter Maze" : `${topic.title} Quest Game`,
      description:
        topic.id === "math"
          ? "Guide the blocks to their matching holes to win."
          : `Play a short quiz game to practice ${topic.title.toLowerCase()}.`,
      type: "Game",
      size: "45 MB",
      image: imageAssets.mazeGame,
      tone: "secondary",
    },
    {
      title: topic.id === "environment" ? "Ocean Explorers" : `${topic.title} Explorers`,
      description:
        topic.id === "environment"
          ? "Discover how colors change underwater in this painting adventure."
          : `Discover a deeper ${topic.title.toLowerCase()} story with offline playback.`,
      type: "Lesson",
      size: "210 MB",
      image: topic.id === "environment" ? imageAssets.underwaterLesson : imageAssets.underwaterLesson,
      tone: "primary",
    },
  ];

  return (
    <div className="download-library-screen">
      <section className="download-library-heading">
        <h1>{topic.title} Library</h1>
        <p>Your downloaded {topic.title.toLowerCase()} adventures ready to play anytime.</p>
        <span>
          <Check size={15} />
          Offline Mode Ready
        </span>
      </section>

      <div className="download-card-list">
        {downloadableItems.map((item) => (
          <DownloadContentCard
            item={item}
            key={item.title}
            onPlay={item.type === "Game" ? onLaunchQuiz : undefined}
          />
        ))}
      </div>

      <section className="want-more-card">
        <CloudDownload size={26} />
        <h2>Want more?</h2>
        <p>Go to Explore to download new adventures.</p>
        <button type="button" onClick={() => onNavigate("library")}>
          Explore
        </button>
      </section>
    </div>
  );
}

function DownloadContentCard({ item, onPlay }) {
  return (
    <article className="download-content-card">
      <div className="download-cover">
        <img src={item.image} alt="" />
        <span className={`download-type ${item.tone}`}>{item.type}</span>
      </div>
      <div className="download-card-body">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="download-card-actions">
          <small>{item.size}</small>
          <span>
            <button className="delete-download" type="button" aria-label={`Delete ${item.title}`}>
              <Trash2 size={16} />
            </button>
            <button
              className={`play-download ${item.tone}`}
              type="button"
              onClick={onPlay}
            >
              <Play size={15} />
              Play
            </button>
          </span>
        </div>
      </div>
    </article>
  );
}

function CategoryTile({ category, compact = false, library = false, onClick }) {
  const Icon = category.icon;

  return (
    <button
      className={`category-tile ${category.tone} ${compact ? "compact" : ""} ${library ? "library" : ""}`}
      style={!compact && !library ? { "--category-image": `url(${category.image})` } : undefined}
      type="button"
      onClick={onClick}
    >
      <span className="category-copy">
        <span className="category-icon">
          <Icon size={compact ? 24 : 28} />
        </span>
        <strong>{category.title}</strong>
        {!compact && <p>{category.description}</p>}
      </span>
    </button>
  );
}

function LessonRow({ lesson, onClick }) {
  return (
    <button className="lesson-row" type="button" onClick={onClick}>
      <span className={`lesson-thumb ${lesson.tone}`} aria-hidden="true">
        <img src={lesson.image} alt="" />
      </span>
      <span className="lesson-body">
        <strong>{lesson.title}</strong>
        <small>
          {lesson.subject} · {lesson.duration}
        </small>
        <ChunkProgress value={lesson.progress} total={lesson.total} tone={lesson.tone} />
      </span>
      {lesson.downloaded && <Check className="download-check" size={30} />}
    </button>
  );
}

function ChunkProgress({ value, total, tone }) {
  return (
    <span className="chunk-progress" aria-label={`Progress: ${value} out of ${total}`}>
      {Array.from({ length: total }).map((_, index) => (
        <i className={index < value ? `filled ${tone}` : ""} key={index} />
      ))}
    </span>
  );
}

const quizQuestions = [
  {
    id: 1,
    question: "Which shape is a circle?",
    choices: [
      { id: "A", text: "Square", type: "square", correct: false },
      { id: "B", text: "Circle", type: "circle", correct: true },
      { id: "C", text: "Triangle", type: "triangle", correct: false }
    ]
  },
  {
    id: 2,
    question: "What phase is the Moon when it's a full bright circle?",
    choices: [
      { id: "A", text: "Crescent Moon 🌙", type: "text", correct: false },
      { id: "B", text: "New Moon 🌑", type: "text", correct: false },
      { id: "C", text: "Full Moon 🌕", type: "text", correct: true }
    ]
  },
  {
    id: 3,
    question: "Which planet has beautiful rings around it?",
    choices: [
      { id: "A", text: "Earth 🌍", type: "text", correct: false },
      { id: "B", text: "Saturn 🪐", type: "text", correct: true },
      { id: "C", text: "Mars 🔴", type: "text", correct: false }
    ]
  }
];

function QuizScreen({ profile, onBack, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [wrongSelected, setWrongSelected] = useState(null);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const activeQuestion = quizQuestions[currentStep];

  const handleChoiceClick = (choice) => {
    if (choice.correct) {
      setWrongSelected(null);
      setShowSuccessOverlay(true);
    } else {
      setWrongSelected(choice.id);
      setTimeout(() => {
        setWrongSelected(null);
      }, 400);
    }
  };

  const handleNextQuestion = () => {
    setShowSuccessOverlay(false);
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="quiz-screen-container">
        <div className="quiz-completion-card">
          <div className="quiz-completion-trophy">
            <Trophy size={48} />
          </div>
          <h1>Awesome Job, {profile.name}!</h1>
          <p>You completed the Knowledge Quest and proved your science skills!</p>
          <div className="quiz-reward-badge">
            <Sparkles size={20} />
            <span>+20 Points Unlocked!</span>
          </div>
          <button className="quiz-finish-button" type="button" onClick={() => onComplete(20)}>
            <Check size={20} />
            Finish & Claim Reward
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = ((currentStep) / quizQuestions.length) * 100 + 10;

  return (
    <div className="quiz-screen-container">
      <div className="quiz-header">
        <button className="quiz-close-button" type="button" onClick={onBack} aria-label="Exit quiz">
          <ArrowLeft size={22} />
        </button>
        <div className="quiz-progress-track">
          <div className="quiz-progress-bar" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="quiz-step-fraction">{currentStep + 1}/{quizQuestions.length}</span>
      </div>

      <div className="quiz-guide-area">
        <div className="quiz-guide-avatar">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArzQ4osEe7bNTH33ACndjZ3gZ5lCFrWi1r-ny0dgwQSC44rJYKph0L5Ik_f3wDbiMYGyLlSd7dSBzCccv2F1B0j0DsTtIp1BcgKTlNe3VOV4ecOLXAdi3_VAITOFN8wbtEmNgawhKo5uzr3_Iqavl81L3bioCz8Zfzcw3j_CHHlqavy1Eiepylt-rnj2U17KcBQOAePMTQN4GYwyzxMr2HjQjwfzQ8IO96qNklyGWoHUpTEAsaLtF2wAIcFWcfwiFVN5cxxl0NKdY" alt="Friendly Owl Guide" />
        </div>
        <div className="quiz-speech-bubble">
          <p>{activeQuestion.question}</p>
        </div>
      </div>

      <div className="quiz-choices-grid">
        {activeQuestion.choices.map((choice) => (
          <button
            key={choice.id}
            className={`quiz-choice-card ${wrongSelected === choice.id ? "wrong-shake" : ""}`}
            type="button"
            onClick={() => handleChoiceClick(choice)}
          >
            {choice.type === "square" && <div className="quiz-visual-square" />}
            {choice.type === "circle" && <div className="quiz-visual-circle" />}
            {choice.type === "triangle" && <div className="quiz-visual-triangle" />}
            <span className="quiz-choice-visual-desc">{choice.text}</span>
          </button>
        ))}
      </div>

      {showSuccessOverlay && (
        <div className="quiz-success-overlay">
          <div className="quiz-success-card">
            <div className="quiz-success-star-ring">
              <Star size={44} className="filled-icon" fill="currentColor" />
            </div>
            <h2>Super Star!</h2>
            <p>That is exactly correct! You are doing amazing.</p>
            <button className="quiz-next-button" type="button" onClick={handleNextQuestion}>
              {currentStep < quizQuestions.length - 1 ? "Next Question" : "See Results"}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function VotingScreen({ selectedVote, onSelectVote }) {
  return (
    <div className="screen-stack vote-screen">
      <section className="vote-hero">
        <span className="community-chip">
          <Megaphone size={18} />
          Community Vote
        </span>
        <h1>What should we explore next?</h1>
        <p>Use your vote to choose our next big adventure. The topic with the most votes becomes our new mission.</p>
      </section>

      <div className="vote-card-grid">
        {voteOptions.map((option) => (
          <VoteOptionCard
            key={option.id}
            option={option}
            selected={selectedVote === option.id}
            onVote={() => onSelectVote(option.id)}
          />
        ))}
      </div>

      <section className="vote-results-panel">
        <div className="vote-results-header">
          <h2>
            <Trophy size={28} />
            Current Leader
          </h2>
          <span>Ends in 2 days</span>
        </div>
        {voteOptions.map((option) => (
          <VoteResult key={option.id} option={option} />
        ))}
      </section>
    </div>
  );
}

function VoteOptionCard({ option, selected, onVote }) {
  const Icon = option.icon;

  return (
    <article className={`vote-option-card ${option.tone} ${selected ? "selected" : ""}`}>
      <div className="vote-option-image">
        <img src={option.image} alt="" />
        <span className="option-badge">
          <Icon size={17} />
          {option.option}
        </span>
      </div>
      <div className="vote-option-body">
        <div>
          <h2>{option.label}</h2>
          <p>{option.description}</p>
        </div>
        <button type="button" onClick={onVote}>
          {selected ? <Check size={20} /> : <ThumbsUp size={20} />}
          {selected ? "Voted" : option.button}
        </button>
      </div>
    </article>
  );
}

function VoteResult({ option }) {
  const Icon = option.icon;
  const filledChunks = Math.round(option.percent / 10);

  return (
    <div className={`vote-result ${option.tone}`}>
      <div className="vote-result-label">
        <span>
          <Icon size={16} />
          {option.label}
        </span>
        <strong>{option.percent}%</strong>
      </div>
      <div className="vote-chunks" aria-label={`${option.label}: ${option.percent}%`}>
        {Array.from({ length: 10 }).map((_, index) => (
          <i className={index < filledChunks ? "filled" : ""} key={`${option.id}-${index}`} />
        ))}
      </div>
    </div>
  );
}

function BadgesScreen({ profile, onSelectBadge }) {
  return (
    <div className="screen-stack">
      <section className="achievement-panel">
        <div className="achievement-copy">
          <h1>
            Your Achievements
            <span className="achievement-mini-icon" aria-hidden="true">
              <Trophy size={22} />
            </span>
          </h1>
          <p>A quick look at your learning progress.</p>
        </div>
        <div className="achievement-stats-grid">
          <StatLine label="Current Streak" value={`${profile.streak} Days`} />
          <StatLine label="Highest Streak" value="32 Days" />
          <StatLine label="Videos Watched" value="18" />
          <StatLine label="Quizzes Completed" value={profile.quizzesCompleted ?? 12} />
        </div>
      </section>

      <SectionHeader title="Badges" />
      <div className="badge-list">
        {badgeItems.map((badge) => {
          const Icon = badge.icon;
          return (
            <button
              className={`badge-row ${badge.unlocked ? "" : "locked"}`}
              disabled={!badge.unlocked}
              key={badge.title}
              type="button"
              onClick={() => onSelectBadge(badge)}
            >
              <Icon size={28} />
              <div>
                <h3>{badge.title}</h3>
                <p>{badge.unlocked ? "Unlocked - view details" : "Locked badge"}</p>
              </div>
              {badge.unlocked && <ChevronRight size={19} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BadgeDetailScreen({ badge, onBack }) {
  return (
    <div className="badge-detail-screen">
      <button className="badge-back-button" type="button" onClick={onBack} aria-label="Back to badges">
        <ArrowLeft size={30} />
      </button>

      <section className={`badge-detail-hero ${badge.tone ?? ""}`}>
        <span className="badge-glow one" />
        <span className="badge-glow two" />
        <img src={badge.image} alt="" />
      </section>

      <section className="badge-detail-copy">
        <span className="unlocked-chip">
          <Star size={18} />
          New Badge Unlocked!
        </span>
        <h1>{badge.detailTitle}</h1>
        <p>{badge.description}</p>
      </section>

      <section className="badge-detail-stats">
        <div>
          <PawPrint size={34} />
          <strong>{badge.activities}</strong>
          <span>Activities</span>
        </div>
        <div>
          <CalendarCheck size={34} />
          <strong>{badge.earnedOn}</strong>
          <span>Earned On</span>
        </div>
      </section>

      <button className="badge-share-button" type="button">
        <HandHeart size={32} />
        Share with Parents
      </button>
    </div>
  );
}

function ProfileScreen({ profile, onNavigate }) {
  return (
    <div className="screen-stack">
      <section className="profile-panel">
        <div className="avatar">
          <img src={profile.avatar} alt={`${profile.name} profile`} />
        </div>
        <div>
          <h1>{profile.name} Hilalogu</h1>
          <p>Level {profile.level} explorer</p>
          <ChunkProgress value={3} total={5} tone="space" />
          <strong>{profile.points} Points</strong>
        </div>
      </section>

      <section className="mastery-panel">
        <h2>Mastery Levels</h2>
        <Mastery label="Space" filled={5} />
        <Mastery label="Math" filled={3} />
        <Mastery label="Science" filled={4} />
      </section>

      <div className="settings-list">
        <SettingsRow icon={ShieldCheck} label="Badges" onClick={() => onNavigate("badges")} />
        <SettingsRow icon={Settings} label="Settings" />
        <SettingsRow icon={Languages} label="Language" />
        <SettingsRow icon={Moon} label="Calm Mode" />
        <SettingsRow icon={LockKeyhole} label="Log Out" />
      </div>
    </div>
  );
}

function ActionCard({ icon: Icon, title, copy, onClick }) {
  return (
    <button className="action-card" type="button" onClick={onClick}>
      <span>
        <Icon size={26} />
      </span>
      <strong>{title}</strong>
      <p>{copy}</p>
    </button>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
    </div>
  );
}

function StatLine({ label, value }) {
  return (
    <div className="stat-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Mastery({ label, filled }) {
  return (
    <div className="mastery-row">
      <span>{label}</span>
      <div>
        {Array.from({ length: 6 }).map((_, index) => (
          <i className={index < filled ? "filled" : ""} key={`${label}-${index}`} />
        ))}
      </div>
    </div>
  );
}

function SettingsRow({ icon: Icon, label, onClick }) {
  return (
    <button className="settings-row" type="button" onClick={onClick}>
      <Icon size={21} />
      <span>{label}</span>
      <ChevronRight size={19} />
    </button>
  );
}

export default App;
