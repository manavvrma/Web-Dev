import Students from "./components/Students";
function App() {
  return (
    <div>
      <Students name="John" age={30} isStudent={true} />
      <Students name="Manav" age={22} isStudent={true} />
      <Students name="James" age={42} isStudent={false} />
      <Students name="Kevin" age={32} isStudent={true} />
      <Students />
    </div>
  );
}

export default App;
