import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  date: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },

  section: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
    textTransform: "uppercase",
  },

  value: {
    fontSize: 16,
    color: "#111827",
    lineHeight: 22,
  },

  actions: {
    marginTop: 24,
  },

  editButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },

  editText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  deleteButton: {
    backgroundColor: "#FEE2E2",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteText: {
    color: "#B91C1C",
    fontSize: 16,
    fontWeight: "600",
  },
});
