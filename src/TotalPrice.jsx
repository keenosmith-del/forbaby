function TotalPrice({ total }) {
    return (
        <h2 style={{ color: "white", fontSize: "18px", marginTop: "20px" }}>
            Total price: R{total}
        </h2>
    );
}

export default TotalPrice;