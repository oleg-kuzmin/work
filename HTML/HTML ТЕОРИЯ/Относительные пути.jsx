//# Относительные пути
//* на одном уровне>
<img src="kitten.jpg" />;
<img src="images/kitten.jpg" />;
<img src="./images/kitten.jpg" />;

//* уровнем выше
<img src="../images/kitten.jpg" />;

//* двумя уровнями выше
<img src="../../images/kitten.jpg" />;

//* от корня проекта (только для сервера)
<img src="/images/kitten.jpg" />;
