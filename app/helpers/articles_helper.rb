module ArticlesHelper
  def articles_content_markdown(text)
    markdown text.content
  end

  def articles_content_md_truncated(a)
    truncate(articles_content_markdown(a), length: 300, :escape => false)
  end
end
