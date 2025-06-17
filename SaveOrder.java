import java.sql.*;

public class SaveOrder {
    public static void main(String[] args) {
        String product = "Smart Watch"; // test value
        double price = 2499.00;
        String status = "Paid";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/upi_site", "root", ""
            );

            String sql = "INSERT INTO orders (product_name, price, payment_status) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, product);
            stmt.setDouble(2, price);
            stmt.setString(3, status);

            int rows = stmt.executeUpdate();
            if (rows > 0) {
                System.out.println("✅ Order saved successfully.");
            }

            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
