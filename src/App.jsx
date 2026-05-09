// import { useState } from "react";
// import { pincodeData } from "./data";

// export default function App() {
//   const [query, setQuery] = useState("");
//   const [selected, setSelected] = useState(null);

//   const suggestions = query.trim()
//     ? pincodeData
//         .filter(
//           (item) =>
//             item.area.toLowerCase().includes(query.toLowerCase()) ||
//             item.pincode.includes(query)
//         )
//         .slice(0, 6)
//     : [];

//   const highlightText = (text, match) => {
//     if (!match) return text;

//     const regex = new RegExp(`(${match})`, "gi");

//     return text.split(regex).map((part, i) =>
//       part.toLowerCase() === match.toLowerCase() ? (
//         <span key={i} style={{ background: "#ffe066" }}>{part}</span>
//       ) : (
//         part
//       )
//     );
//   };

//   const getMapUrl = (area) => {
//     return `https://www.google.com/maps?q=${encodeURIComponent(
//       area + ", Bangalore"
//     )}&output=embed`;
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.overlay}></div>

//       <div style={styles.container} className="fade-in">

//         {/* TITLE */}
//         <h1 style={styles.title}>📍 Bangalore Pincode Explorer</h1>
//         <p style={styles.subtitle}>
//           Search areas, pincodes & view location on map
//         </p>

//         {/* SEARCH BOX (FIXED & CENTERED) */}
//         <div style={styles.searchBox}>
//           <input
//             style={styles.input}
//             placeholder="Search area or pincode..."
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               setSelected(null);
//             }}
//           />
//         </div>

//         {suggestions.length > 0 && (
//           <div style={styles.dropdown}>
//             {suggestions.map((item, i) => (
//               <div
//                 key={i}
//                 style={styles.suggestion}
//                 onClick={() => {
//                   setQuery(item.area);
//                   setSelected(item);
//                 }}
//               >
//                 {highlightText(item.area, query)} - {item.pincode}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* SELECTED CARD */}
//         {selected && (
//           <div style={styles.card} className="fade-in card-hover">

//             <div style={styles.pin}>{selected.pincode}</div>
//             <div style={styles.area}>{selected.area}</div>

//             {/* MAP */}
//             <div className="fade-in">
//               <iframe
//                 title="map"
//                 width="100%"
//                 height="250"
//                 style={{
//                   border: 0,
//                   marginTop: "10px",
//                   borderRadius: "10px",
//                 }}
//                 loading="lazy"
//                 src={getMapUrl(selected.area)}
//               />
//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     fontFamily: "system-ui",
//     display: "flex",
//     justifyContent: "center",
//     padding: "20px",
//     backgroundImage:
//       "url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1920&q=80')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     position: "relative",
//   },

//   overlay: {
//     position: "absolute",
//     inset: 0,
//     background: "rgba(0,0,0,0.45)",
//     zIndex: 0,
//   },

//   container: {
//     width: "100%",
//     maxWidth: "650px",
//     background: "rgba(255,255,255,0.92)",
//     padding: "25px",
//     borderRadius: "16px",
//     position: "relative",
//     zIndex: 1,
//     backdropFilter: "blur(10px)",
//   },

//   title: {
//     textAlign: "center",
//     fontSize: "26px",
//     marginBottom: "5px",
//   },

//   subtitle: {
//     textAlign: "center",
//     color: "#666",
//     marginBottom: "20px",
//   },
//   searchBox: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "10px",
//   },

//   input: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "14px 18px",
//     borderRadius: "14px",
//     border: "1px solid #ddd",
//     outline: "none",
//     fontSize: "15px",
//     background: "#fff",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//   },

//   dropdown: {
//     width: "100%",
//     maxWidth: "500px",
//     margin: "0 auto",
//     border: "1px solid #ddd",
//     borderRadius: "12px",
//     background: "#fff",
//     maxHeight: "200px",
//     overflowY: "auto",
//     boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
//   },

//   suggestion: {
//     padding: "10px",
//     cursor: "pointer",
//     borderBottom: "1px solid #eee",
//   },

//   card: {
//     marginTop: "20px",
//     background: "#f5f5f5",
//     padding: "15px",
//     borderRadius: "10px",
//   },

//   pin: {
//     fontWeight: "bold",
//     color: "#4f46e5",
//     fontSize: "18px",
//   },

//   area: {
//     marginTop: "5px",
//     color: "#333",
//   },
// };
import { useState } from "react";
import { pincodeData } from "./data";

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const suggestions = query.trim()
    ? pincodeData
        .filter(
          (item) =>
            item.area.toLowerCase().includes(query.toLowerCase()) ||
            item.pincode.includes(query)
        )
        .slice(0, 6)
    : [];

  const highlightText = (text, match) => {
    if (!match) return text;

    const regex = new RegExp(`(${match})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === match.toLowerCase() ? (
        <span key={i} style={{ background: "#ffe066" }}>{part}</span>
      ) : (
        part
      )
    );
  };

  const getMapUrl = (area) => {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      area + ", Bangalore"
    )}&output=embed`;
  };

  const theme = darkMode ? darkStyles : lightStyles;

  return (
    <div style={theme.page}>
      <div style={theme.overlay}></div>

      <div style={theme.container}>

        {/* HEADER */}
        <div style={theme.header}>
          <h1 style={theme.title}>📍 Bangalore Pincode Explorer</h1>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={theme.toggleBtn}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <p style={theme.subtitle}>
          Search areas, pincodes & view on map
        </p>

        {/* SEARCH */}
        <input
          style={theme.input}
          placeholder="Search area or pincode..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
          }}
        />

        {/* DROPDOWN */}
        {suggestions.length > 0 && (
          <div style={theme.dropdown}>
            {suggestions.map((item, i) => (
              <div
                key={i}
                style={theme.suggestion}
                onClick={() => {
                  setQuery(item.area);
                  setSelected(item);
                }}
              >
                {highlightText(item.area, query)} - {item.pincode}
              </div>
            ))}
          </div>
        )}

        {/* CARD */}
        {selected && (
          <div style={theme.card}>
            <div style={theme.pin}>{selected.pincode}</div>
            <div style={theme.area}>{selected.area}</div>

            <iframe
              title="map"
              width="100%"
              height="250"
              style={{
                border: 0,
                marginTop: "10px",
                borderRadius: "10px",
              }}
              loading="lazy"
              src={getMapUrl(selected.area)}
            />
          </div>
        )}

      </div>
    </div>
  );
}

/* ================= LIGHT THEME ================= */
const lightStyles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "system-ui",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    zIndex: 0,
  },

  container: {
    width: "100%",
    maxWidth: "650px",
    background: "rgba(255,255,255,0.92)",
    padding: "25px",
    borderRadius: "16px",
    zIndex: 1,
    backdropFilter: "blur(10px)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: "22px" },

  toggleBtn: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#111",
    color: "white",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },

  dropdown: {
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #ddd",
    maxHeight: "200px",
    overflowY: "auto",
  },

  suggestion: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },

  card: {
    marginTop: "20px",
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "10px",
  },

  pin: {
    fontWeight: "bold",
    color: "#4f46e5",
  },

  area: {
    marginTop: "5px",
  },
};

/* ================= DARK THEME ================= */
const darkStyles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "system-ui",
    background: "#0f172a",
  },

  overlay: { display: "none" },

  container: {
    width: "100%",
    maxWidth: "650px",
    background: "#111827",
    padding: "25px",
    borderRadius: "16px",
    color: "white",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: "22px" },

  toggleBtn: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#facc15",
    color: "#000",
  },

  subtitle: {
    textAlign: "center",
    color: "#aaa",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #333",
    marginBottom: "10px",
    background: "#1f2937",
    color: "white",
  },

  dropdown: {
    background: "#1f2937",
    borderRadius: "10px",
    border: "1px solid #333",
    maxHeight: "200px",
    overflowY: "auto",
  },

  suggestion: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #333",
  },

  card: {
    marginTop: "20px",
    background: "#1f2937",
    padding: "15px",
    borderRadius: "10px",
  },

  pin: {
    fontWeight: "bold",
    color: "#60a5fa",
  },

  area: {
    marginTop: "5px",
    color: "#ddd",
  },
};